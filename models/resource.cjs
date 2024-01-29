const mongoose = require('mongoose');
const { Schema, model } = mongoose
mongoose.connect(process.env.DATABASE_URL);


const ResourceSchema = new Schema({
    name: String,
    location: String,
    services: [String],
    seeDetails: Boolean
})

module.exports = model('resource', ResourceSchema);