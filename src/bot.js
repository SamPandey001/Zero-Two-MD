const mongoose = require('mongoose');
const groupSchema = new mongoose.Schema({
chatbot: { type: String, default: "false"}
})
const bot = mongoose.model("Bot", groupSchema)
module.exports = bot