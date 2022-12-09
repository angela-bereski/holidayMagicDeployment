const mongoose = require('mongoose');

const MagicMakerSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [
            true,
            "Magic Maker name is required."
        ],
        minLength : [
            3,
            "Name must be at least 3 characters."
        ]
    },
    type : {
        type: String,
        required: [
            true,
            "Magic Maker type is required."
        ],
        minLength : [
            3,
            "Type must be at least 3 characters."
        ]
    },
    description : {
        type: String,
        required: [
            true,
            "Magic Maker description is required."
        ],
        minLength : [
            3,
            "Description must be at least 3 characters."
        ]
    }, 
    skill1 : {
        type: String,
    },
    skill2 : {
        type: String,
    },
    skill3 : {
        type: String,
    }
}, {timestamps: true});
module.exports = mongoose.model('MagicMaker', MagicMakerSchema);