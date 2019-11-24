const express = require('express');
const suppliers = require('./suppliers');
const router = express.Router();
const auth = require('../controllers/auth');

  

// Auth route
router.post('/auth', auth.login);
router.use('/suppliers', suppliers);



module.exports = router