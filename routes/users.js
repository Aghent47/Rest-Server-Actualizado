import express from 'express';
import usuarios from '../controllers/users.js';
import { check } from 'express-validator';
const router = express.Router();

router.get('/', usuarios.get);

router.post('/',[
    check('mail', 'El correo no es válido').isEmail(),
], usuarios.post);

router.put('/:id', usuarios.put);
router.delete('/', usuarios.delete);
router.patch('/', usuarios.patch);

export default router;