import { Router, request, response } from "express";
import { check } from "express-validator";

import { validarCampos } from '../middlewares/validar_campos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';
import { actualizarCategoria, crearCategoria, getCategoriaById, getCategorias } from "../controllers/categorias.js";
import { esRolevalido, existeCategoriaById } from "../helpers/db_validators.js";

const router = Router();

// obtener todas las categorias - path publico
router.get('/',[
] , getCategorias);

// Obtener una categoria por id - path publico
router.get('/:id', [
    check('id','No es un ID válido de mongo').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos,
],getCategoriaById);

// Crear una nueva categoria - privado - cualquier persona con un token valido
router.post('/',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria );

// Actualizar - privado - cualquier persona con un token valido
router.put('/:id', [
    validarJWT,
    check('id','No es un ID válido').isMongoId(),
    check('id').custom(existeCategoriaById),

    // validarCampos,
], actualizarCategoria );

// Borrar una categoria - Admin
router.delete('/:id', (req, res) => {
    res.json({
        msg: 'Delete API - Eliminar Categoria'

    });

});


export default router;