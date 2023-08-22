const mongoose = require("mongoose");

const PosterSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    alas: {
        type: String,
        required: true,
        maxLength: 50
    },
    key: {
        type: String,
        required: true,
        validate: {
            validator: function (str) {
                return str.length == 32;
            },
            message: () => `error`
        }
    },
    comment: {
        type: String,
        maxLength: 500
    },
    clearance: {
        type: Number,
        required: true
    }
});

const Model = mongoose.model("poster", PosterSchema);

module.exports = Model;