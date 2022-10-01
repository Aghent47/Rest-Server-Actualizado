import express from 'express';
import usuarios from '../controllers/users.js';
const router = express.Router();

router.get('/', usuarios.get);
router.post('/', usuarios.post);
router.put('/', usuarios.put);
router.delete('/', usuarios.delete);
router.patch('/', usuarios.patch);

export default router;