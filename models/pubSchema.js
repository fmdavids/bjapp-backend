const mongoose = require("mongoose")

const pubSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the publisher name"],
    },
    dob: {
        type: String,
        required: [true, "Please provide date of birth"],
    },
    dim: {
        type: String,
    },
    sex: {
        type: String,
        required: [true],
    },
    hope: {
        type: String,
        required: [true, "Please choose pub hope"],
    },
    group: {
        type: Number,
        required: [true, "Please add pub to a group"],
    },
    privilege: {
        type: String,
    },
    pioneer: {
        type: String,
    },
    pub_address: {
        type: String,
        required: [true, "Please add pub Address"],
    },
    pub_phone: {
        type: String,
        required: [true, "Please add pub phone"],
    },
    emergency_name: {
        type: String,
        required: [true, "Please add pub emergency contact Person"],
    },
    emergency_address: {
        type: String,
        required: [true, "Please add pub emergency contact Person address"],
    },
    emergency_phone: {
        type: String,
        required: [true, "Please add pub emergency contact Person phone"],
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Pub", pubSchema )