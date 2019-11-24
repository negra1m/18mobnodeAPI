const express = require('express');
const suppliers = require('./suppliers');
const auth = require('../controllers/auth');


const router = express.Router();
const auth = require('../middlewares/auth');

// Auth route
router.post('/auth', auth.login);
router.use('/suppliers', suppliers);

module.exports = router