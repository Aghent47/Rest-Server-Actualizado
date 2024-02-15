import { response } from "express";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
export const cargarArchivo = async (req, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json('No files were uploaded.');
        return;
    }

    const { archivo } = req.files
    const __dirname = path.dirname(__filename);
    const uploadPath = path.join( __dirname, '../uploads/', archivo.name);

    archivo.mv(uploadPath, (err) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({
            msg: 'File uploaded to ' + uploadPath
        });
    });

}