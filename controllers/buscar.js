import { response } from "express";
import { Types } from "mongoose";
import { User, Categoria, Producto } from "../models/index.js";

const { ObjectId } = Types;

const coleccionPermitidas = [
    'users',
    'categorias',
    'productos',
    'roles',
]

const buscarUsuarios =  async (termino = '' , res = response) => {

    const esMongoId = ObjectId.isValid(termino); // si es un id de mongo retorna true

    if (esMongoId) {
        const usuario = await User.findById(termino);
        return res.json({
            results: (usuario) ? [usuario] : []
        })
    
    }

}


export const buscar = (req, res = response) => {

    const { coleccion, termino } = req.params;

    if (!coleccionPermitidas.includes(coleccion)) {
        return res.status(400).json({
            msg: `Las colecciones permitidas son: ${coleccionPermitidas}`
        })
    }

    switch (coleccion) {
        case 'users':
            buscarUsuarios(termino, res);
            break;

        case 'categorias':

            break;

        case 'productos':

            break;

        default:
            res.status(500).json({
                msg: 'Se me olvido hacer esta busqueda'
            })
            break;

    }

}