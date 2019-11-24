const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/suppliers')
const auth = require('../controllers/auth');
const verifyToken = require('../middlewares/verifyToken')

router.get('/', verifyToken, supplierController.getAll);
router.get('/:id', verifyToken, supplierController.getById);
router.post('/', verifyToken, supplierController.add);
router.put('/:id', verifyToken, supplierController.update);
router.delete('/:id', verifyToken, supplierController.delete);
router.put('/:id/products', verifyToken, supplierController.addProducts)

module.exports = router