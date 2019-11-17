const express = require('express');
const suppliers = require('./suppliers');
const router = express.Router();

router.use('/suppliers', suppliers);

// Export Routes 
module.exports = router;