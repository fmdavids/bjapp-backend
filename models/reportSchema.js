const mongoose = require("mongoose")

const reportSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
        // required: [true, "Please add the publisher name"],
    },
    group: {
        type: String,
        required: false
        // required: [true, "Please add the publisher name"],
    },
    month: {
        type: String,
        required: false,
        // required: [true, "Please add the reporting month"],
    },
    placements: {
        type: Number,
        required: false
    },
    videos: {
        type: Number,
        required: false,
    },
    hours: {
        type: Number,
        required: false,
        // required: [true, "Please add the report in hour"],
    },
    return_visit: {
        type: Number,
        required: false
    },
    study: {
        type: Number,
        required: false
    },
    remark: {
        type: String,
        required: false
    },
    
    
}, {
    timestamps: true
})

module.exports = mongoose.model("Report", reportSchema )