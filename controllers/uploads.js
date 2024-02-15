import { response } from "express";
import { subirArchivo } from "../helpers/subir-archivo.js";

export const cargarArchivo = async (req, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json('No files were uploaded.');
        return;
    }
    
    const pathFile = await subirArchivo(req.files);

    res.json({
        Name: pathFile
    });

}