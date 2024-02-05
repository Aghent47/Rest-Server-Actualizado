import express from 'express';
import { check } from 'express-validator';
import login from '../controllers/auth.js';
import { validarCampos } from '../middlewares/validar_campos.js';

const router = express.Router();

router.post('/login',[
    check('mail', 'The email is required').isEmail(),
    check('password', 'The password is required').not().isEmpty(),
    validarCampos
], login );

export default router;
