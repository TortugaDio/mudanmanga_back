const { Router } = require('express');
const uploadsController = require('../controllers/uploads/index');

const router = Router();

router.post('/image' , uploadsController.upload);
//TODO: This route is not working
router.post('/image/:public_id' , uploadsController.destroy);

module.exports = router;