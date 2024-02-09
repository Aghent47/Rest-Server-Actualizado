import { Router } from "express";
import { check } from "express-validator";

import { validarCampos } from '../middlewares/validar_campos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';
import { crearCategoria } from "../controllers/categorias.js";

const router = Router();

// obtener todas las categorias - path publico
router.get('/', (req, res) => {
    res.json({
        msg: 'get API - categorias'
        
    });

});

// Obtener una categoria por id - path publico
router.get('/:id', (req, res) => {
    res.json({
        msg: 'get API - categorias por id'
        
    });

});

// Crear una nueva categoria - privado - cualquier persona con un token valido
router.post('/',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria );

// Actualizar - privado - cualquier persona con un token valido
router.put('/:id', (req, res) => {
    res.json({
        msg: 'Put API - actualizar Categoria'
        
    });

});

// Borrar una categoria - Admin
router.delete('/:id', (req, res) => {
    res.json({
        msg: 'Delete API - Eliminar Categoria'
     
    });

});


export default router;