const mongoose = require("mongoose");

const LinkSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    alas: {
        type: String,
        required: true,
        maxLength: 50
    },
    title: {
        type: String,
        required: true,
        maxLength: 200
    },
    link: {
        type: String,
        required: true,
        unique: true,
        maxLength: 800
    },
    categories: {
        type: [String],
        required: true,
    },
    comment: {
        type: String,
        maxLength: 500
    },
    language: {
        type: String,
        required: true,
        maxLength: 25
    }
});

const Model = mongoose.model("link", LinkSchema);

module.exports = Model;