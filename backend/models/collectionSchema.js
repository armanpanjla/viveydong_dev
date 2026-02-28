import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    description: String,

}, {
    timestamps: true
})


export default mongoose.model('Collection', collectionSchema);