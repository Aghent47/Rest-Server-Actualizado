import express from 'express';
import usuarios from '../controllers/users.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar_campos.js';
import { emailExiste, esRolevalido } from '../helpers/db_validators.js';

const router = express.Router();

router.get('/', usuarios.get);

router.post('/',[

    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña debe contener entre 6 y 12 caracteres').isLength({min:6, max:12}),
    check('mail', 'El correo no es válido').isEmail(),
    check('mail').custom(emailExiste),
    // check('rol', 'no es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),

    check('rol').custom(esRolevalido),
    
    validarCampos,

], usuarios.post);

router.put('/:id', usuarios.put);



router.delete('/', usuarios.delete);
router.patch('/', usuarios.patch);

export default router;