const express = require('express');
const suppliers = require('./suppliers');
const router = express.Router();
const auth = require('../middlewares/auth');

router.use('/suppliers', auth, suppliers);

module.exports = router