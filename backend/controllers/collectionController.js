import Collection from "../models/collectionSchema.js"

export const createCollection = async (req, res) => {
    try {
        const {
            name,
            description,
            owner,
        } = req.body;
        const newCollection = new Collection({
            name,
            description,
            owner
        })
        const savedCollection = await newCollection.save();
        res.status(200).json(savedCollection)
    } catch (error) {
        console.error("COLLECTION SAVE ERROR:", error.message);
        res.status(400).json({
            message: error.message
        });
    }
}