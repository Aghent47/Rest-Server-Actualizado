import { Router } from "express";
import { check } from "express-validator";

import { validarCampos } from '../middlewares/validar_campos.js';

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
router.post('/', (req, res) => {
    res.json({
        msg: 'Post API - Create Categoria'
        
    });

});

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