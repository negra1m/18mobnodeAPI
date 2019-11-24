const express = require('express');
const suppliers = require('./suppliers');
const auth = require('../controllers/auth');


const router = express.Router();

// Auth route
router.post('/auth', auth.login);

router.use('/suppliers', suppliers);

// Export Routes 
module.exports = router;