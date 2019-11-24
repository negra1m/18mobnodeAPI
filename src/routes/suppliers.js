const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/suppliers')
const auth = require('../middlewares/verifyToken');

router.get('/', supplierController.getAll);
router.get('/:id', supplierController.getById);
router.post('/', supplierController.add);
router.put('/:id', supplierController.update);
router.delete('/:id', supplierController.delete);

module.exports = router
