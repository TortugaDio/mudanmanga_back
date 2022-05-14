const { Router } = require('express');
const uploadsController = require('../controllers/uploads/index');

const router = Router();

router.post('/' , uploadsController.uploadFile);

module.exports = router;