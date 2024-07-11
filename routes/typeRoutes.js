const express = require('express');
const router = express.Router();
const typeController = require('../controllers/typeController');

router.get('/', typeController.getAllTypes);
router.get('/create', typeController.createType);
router.post('/store', typeController.storeType);
router.get('/edit/:id', typeController.editType);
router.post('/update/:id', typeController.updateType);
router.get('/delete/:id', typeController.deleteType);

module.exports = router;
