import Anime from '../models/animeSchema'


export const addAnime = async (req, res) => {
    try {
        const newAnime = new Anime({
            ...req.body,
            owner: req.body.userId
        });
        const savedAnime = await newAnime.save();
        res.status(200).json(SavedAnime);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


export const getMyAnime = async (req, res) => {
    try {
        // Find anime where the owner matches the ID passed in the request
        const userId = req.query.userId;
        const list = await Anime.find({ owner: userId });

        // Logic for "Today's Playlist"
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = days[new Date().getDay()];

        // Sort: Put today's releases at the top
        const sortedList = list.sort((a, b) => {
            if (a.releaseDay === today && b.releaseDay !== today) return -1;
            if (a.releaseDay !== today && b.releaseDay === today) return 1;
            return 0;
        });

        res.status(200).json(sortedList);
    } catch (error) {
        res.status(500).json({ message: "Error fetching your list" });
    }
};


export const updateEpisode = async (req, res) => {
    const { id } = req.params; // Get ID from the URL
    const { action } = req.body; // Action will be 'inc' or 'dec'

    try {
        const amount = action === 'inc' ? 1 : -1;

        // $inc is a MongoDB operator that adds/subtracts numbers automatically
        const updatedAnime = await Anime.findByIdAndUpdate(
            id,
            { $inc: { currentEpisode: amount } },
            { new: true } // This returns the updated version of the document
        );

        res.status(200).json(updatedAnime);
    } catch (error) {
        res.status(400).json({ message: "Update failed" });
    }
};


