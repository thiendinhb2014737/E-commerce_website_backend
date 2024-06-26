const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(

    {
        eventName: { type: String, require: true },
        days: { type: String, require: true },
        hours: { type: String, require: true },
        minutes: { type: String, require: true },
        seconds: { type: String, require: true },
        discount: { type: Number, require: true },
    },
    {
        timestamps: true // Thời gian tạo và update
    }
);
const Event = mongoose.model("Event", userSchema);
module.exports = Event;