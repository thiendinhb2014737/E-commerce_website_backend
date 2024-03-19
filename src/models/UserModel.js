const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(

    {
        name: { type: String },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        isAdmin: { type: Boolean, default: false, require: true },
        phone: { type: Number },
        address: { type: String },
        avatar: { type: String },
        createUserdAt: { type: String }
    },
    {
        timestamps: true // Thời gian tạo và update
    }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
