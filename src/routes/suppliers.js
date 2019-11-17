const express = require('express');
const router = express.Router();

// TODO
// controllers Integration
// const Suppliers = require(./controllers/Suppliers);

router.get('/:id', Suppliers.get);

module.exports = router;