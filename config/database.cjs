const User = require('../models/users.cjs')
const Resource = require('../models/resource.cjs')

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

// nodemon server.cjs

async function seedToDatabase(Model, items) {
    items.forEach(async item => {
        const newItem = await new Model(item)
        await newItem.save()
        console.log('Added item')
    })
}


db.on('connected', async function() {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
    // const resources = await Resource.find({})
    // console.log('RESOURCES', resources)
});