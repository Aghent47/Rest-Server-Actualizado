import { response } from "express";

export const cargarArchivo = async (req, res = response) => {

    res.json({
        msg: 'cargarArchivo'
    });

}