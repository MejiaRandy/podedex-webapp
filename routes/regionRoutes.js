const express = require('express');
const router = express.Router();
const regionController = require('../controllers/regionController');

router.get('/', regionController.getAllRegions);
router.get('/create', regionController.createRegion);
router.post('/store', regionController.storeRegion);
router.get('/edit/:id', regionController.editRegion);
router.post('/update/:id', regionController.updateRegion);
router.get('/delete/:id', regionController.deleteRegion);

module.exports = router;
