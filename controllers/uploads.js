import { response } from "express";
import { subirArchivo } from "../helpers/subir-archivo.js";

export const cargarArchivo = async (req, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json('No files were uploaded.');
        return;
    }

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

    res.json({
        coleccion,
        id
    });
}