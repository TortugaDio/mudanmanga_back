const { Router } = require('express');

const {
    login,
    register,
    logout
} = require('../controllers/auth');

const router = Router();
router.post('/sigin' , login )
router.post('/sigup' ,  register)
router.post('/logout' , logout)


module.exports = router;