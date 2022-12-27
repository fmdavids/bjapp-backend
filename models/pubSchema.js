const mongoose = require("mongoose")

const pubSchema = mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please add the publisher name"],
    },
    dob: {
        type: String,
        // required: [true, "Please provide date of birth"],
    },
    dim: {
        type: String,
        // required: [true, "Please provide date immersed"],
    },
    group: {
        type: Number,
        // required: [true, "Please add pub to a group"],
    },
    sex: {
        type: String,
        // required: [true],
    },
    hope: {
        type: String,
        // required: [true, "Please chose pub hope"],
    },
    group: {
        type: Number,
        // required: [true, "Please add pub to a group"],
    },
    privilege: {
        type: String,
    },
    pub_contact: {
        phone: {
            type: String,
        },
        home: {
            type: String,
        },
    },
    Emergency_contact: {
        name: {
            type: String,
        },
        phone: {
            type: String,
        },
        home: {
            type: String,            
        },
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Pub", pubSchema )