const Resource = require('../../models/resource.cjs');

async function getResources(req, res) {
    const resources = await Resource.find({})
    // console.log(resources)
    res.json(resources)
}

module.exports = {
    getResources
}