import express from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar_campos.js';
import { cargarArchivo } from '../controllers/uploads.js';

const router = express.Router();

 router.post('/', [

 ],cargarArchivo);


export default router;
