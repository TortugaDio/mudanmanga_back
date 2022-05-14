const { Router } = require('express');
const { validarCampos  } = require('../middlewares/validateInput')

const userContoller = require('../controllers/users/index');
const userSchema = require('../controllers/users/schema');

const router = Router();

router.post('/' , [ userSchema.createUser , validarCampos ] , userContoller.create);
router.get('/' , userContoller.get)
module.exports = router;