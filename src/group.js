const mongoose = require('mongoose');
const groupSchema = new mongoose.Schema({
id: { type: String, require: true, unique: true },
events: { type: String, default: "false" },
invite: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
mod: { type: String, default: "false" }
})
const group = mongoose.model("Group", groupSchema)
module.exports = group