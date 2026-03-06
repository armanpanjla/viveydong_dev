import Anime from '../models/animeSchema.js'


export const addAnimeToCollection = async (req, res) => {
    try {
        // We expect: { title, releaseDay, baseLink, collectionId, userId }
        const newAnime = new Anime({
            ...req.body,
            owner: req.body.userId,
            collectionId: req.body.collectionId // This "locks" it to the folder
        });

        const savedAnime = await newAnime.save();
        res.status(201).json(savedAnime);
    } catch (error) {
        console.error("  ERROR:", error.message);
        res.status(400).json({
            message: error.message
        });
    }
};


export const getAnimeByFolder = async (req, res) => {
    try {
        const {
            folderId
        } = req.params; // Get the ID from the URL

        // Find only anime that match this folder ID
        const animeList = await Anime.find({
            collectionId: folderId
        });

        res.status(200).json(animeList);
    } catch (error) {
        res.status(500).json({
            message: "Error loading this folder"
        });
    }
};


export const addAnime = async (req, res) => {
    try {
        const newAnime = new Anime({
            ...req.body,
            owner: req.body.userId
        });
        const savedAnime = await newAnime.save();
        res.status(200).json(savedAnime);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}


export const getMyAnime = async (req, res) => {
    try {
        // Find anime where the owner matches the ID passed in the request
        const userId = req.query.userId;
        const list = await Anime.find({
            owner: userId
        });

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
        res.status(500).json({
            message: "Error fetching your list"
        });
    }
};


export const updateEpisode = async (req, res) => {
    const {
        id
    } = req.params; // Get ID from the URL
    const {
        action
    } = req.body; // Action will be 'inc' or 'dec'

    try {
        const amount = action === 'inc' ? 1 : -1;

        // $inc is a MongoDB operator that adds/subtracts numbers automatically
        const updatedAnime = await Anime.findByIdAndUpdate(
            id, {
                $inc: {
                    currentEpisode: amount
                }
            }, {
                new: true
            } // This returns the updated version of the document
        );    
        res.status(200).json(updatedAnime);
    } catch (error) {
        res.status(400).json({
            message: "Update failed"
        });
    }
};

    export const deleteAnime =async  (req,res)=>{
        try {
            const {id} = req.params;
            const userId =req.body.userId;

            const deletedAnime = await Anime.findOneAndDelete({
                _id :id,
                owner:userId,
                collectionId :req.body.collectionId
            })
            if (!deletedAnime){
                return res.status(404).json({message:"Unable to delete anime"})
            }
            res.status(200).json({message:"Anime Deleted"})


        } catch (error) {
            res.status(500).json({message:error.message});
        }
    }