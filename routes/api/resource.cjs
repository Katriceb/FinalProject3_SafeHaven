// routes/api/users.cjs

const express = require('express');
const router = express.Router();
const resourceCtrl = require('../../controllers/api/resource.cjs');

router.get('/', resourceCtrl.getResources)

module.exports = router;