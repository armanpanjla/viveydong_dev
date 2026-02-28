import mongoose from "mongoose";

const animeSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
        index: true
    },

    colledtionId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
        index: true
    },
    //info sections

    tittle: {
        type: String,
        required: true
    },
    season: {
        type: Number,
        default: 1
    },
    currentEpisode: {
        type: Number,
        default: 0
    },

    //date
    releaseDay: {
        type: String,
        Enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        required: true
    },
    baselink: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Anime = mongoose.model('Anime', animeSchema)
export default Anime;