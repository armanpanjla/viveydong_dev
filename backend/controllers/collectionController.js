import Collection from "../models/collectionSchema"

export const createCollection =async (req,res)=>{
    try {
        const {name, userId } = req.body;
        const newCollection = new Collection({
            name,
            owner: userId,
        })
        const savedCollection  =await newCollection.save();
        res.status(200).json(savedCollection)
    } catch (error) {
        res.status(400).json({message:"could not save collection"})
    }
}
