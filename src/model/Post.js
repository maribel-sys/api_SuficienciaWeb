const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({

    description : {
        type: String,
        default: '',
    },
    image_path : {
        type: String,
        default: '',
        required: true
    },
    like: {
        type: Array,
        default: [],
    },
    user_id : {
        type: String,
        required: true
    },
    profile_picture_path : {
        type: String,
        required: true
    },


}, {timestamps: true});
module.exports = mongoose.model('posts', PostSchema);