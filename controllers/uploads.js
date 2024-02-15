import { response } from "express";
import { subirArchivo } from "../helpers/subir-archivo.js";

import { User, Producto } from "../models/index.js";

export const cargarArchivo = async (req, res = response) => {

    try {
        // const pathFile = await subirArchivo(req.files, ['txt', 'pdf'], 'txts');
        const pathFile = await subirArchivo(req.files, undefined, 'imgs');
        res.json({
            Name: pathFile
        });

    } catch (error) {
        res.status(400).json(error);

    }
}

export const actualizarImagen = async (req, res = response) => {

    const { coleccion, id } = req.params;

    let modelo;

    switch (coleccion) {
        case 'users':

            modelo = await User.findById(id);
            if (!modelo) {
                return res.status(400).json({
                    msg: `No existe un usuario con el id ${id}`
                });
            }
            break;
        case 'productos':
            modelo = await Producto.findById(id);
            if (!modelo) {
                return res.status(400).json({
                    msg: `No existe un Producto con el id ${id}`
                })
            }
            break;
        default:
            return res.status(500).json({ msg: 'Se me olvido validar esto' });
    }

    //grabas en BD
    const pathFile = await subirArchivo(req.files, undefined, coleccion);
    modelo.img = pathFile;

    await modelo.save();

    res.json({
        modelo
    });
}