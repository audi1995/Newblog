const mongoose = require("mongoose")
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});


const User = mongoose.model("User", UserSchema);
module.exports = User;
