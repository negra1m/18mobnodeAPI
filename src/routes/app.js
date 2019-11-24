const express = require('express');
const suppliers = require('./suppliers');
const users = require('./users');
const router = express.Router();
const auth = require('../controllers/auth');

  

// Auth route
router.post('/auth', auth.login);
router.use('/suppliers', suppliers);
router.use('/users', users);



module.exports = router