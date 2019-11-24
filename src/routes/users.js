const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const auth = require('../controllers/auth');
const verifyToken = require('../middlewares/verifyToken')

router.get('/',verifyToken, userController.getAll);
router.get('/:id',verifyToken, userController.getById);
router.post('/',verifyToken, userController.add);
router.put('/:id',verifyToken, userController.update);
router.delete('/:id',verifyToken, userController.delete);

module.exports = router