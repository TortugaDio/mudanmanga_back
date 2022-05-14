const { Router } = require('express');

const router = Router();

router.use('/users', require('./users.routes'));
router.use('/auth', require('./auth.routes'));
router.use('/uploads', require('./uploads.routes'));
module.exports = router;
