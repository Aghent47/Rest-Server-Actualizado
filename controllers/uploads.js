import { response } from "express";
import { fileURLToPath } from 'url';
import path from 'path';

import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
export const cargarArchivo = async (req, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json('No files were uploaded.');
        return;
    }

    const { archivo } = req.files
    const __dirname = path.dirname(__filename);

    const newNameFile = archivo.name.split('.');
    console.log(newNameFile);

    //sacar extension del archivo
    const extension = newNameFile[newNameFile.length - 1];


    //validar la extencion
    const extencionesValidas = ['png', 'jpg', 'jpeg', 'gif'];

    if (!extencionesValidas.includes(extension)) {
        return res.status(400).json({
            msg: `La extension ${extension} no es permitida, las permitidas son ${extencionesValidas}`
        });

    }
     
     const nameTemporalFile = uuidv4() + '.' + extension;
     const uploadPath = path.join( __dirname, '../uploads/', nameTemporalFile);

     archivo.mv(uploadPath, (err) => {
         if (err) {
             return res.status(500).json(err);
         }
         res.json({
             msg: 'File uploaded to ' + uploadPath
         });
     });

}