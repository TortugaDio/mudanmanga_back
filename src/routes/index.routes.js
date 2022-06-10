const { Router } = require('express');

const router = Router();

router.use('/auth', require('./auth.routes'));
router.use('/uploads', require('./uploads.routes'));
router.use('/users', require('./users.routes'));

module.exports = router;
