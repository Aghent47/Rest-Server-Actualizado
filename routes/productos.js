import { Router,} from "express";
import { actulizarProducto, crearProducto, getProductoById, getProductos } from "../controllers/productos.js";
import { check } from "express-validator";
import { validarCampos, validarJWT } from "../middlewares/index.js";
import { existeProductoById } from "../helpers/db_validators.js";

const router = Router();

// Crear una nueva producto - privado - cualquier persona con un token valido
router.post('/',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos,
], crearProducto );

// Obtener todos los productos - publico

router.get('/', getProductos );

// Obtener una Producto por id - path publico
router.get('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeProductoById),
    validarCampos

], getProductoById );

// Actualizar - privado - cualquier persona con un token valido
router.put('/:id', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id',).custom(existeProductoById),
    validarCampos

], actulizarProducto );


export default router;