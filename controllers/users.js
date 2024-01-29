import { response, request } from "express";
import bcryptjs from 'bcryptjs';
import {User} from '../models/user.js';

const usuarios = {};

usuarios.get = (req = request, res = response) => {
    const {q,name = 'No Name', apiKey} = req.query;

    res.json({
        msg:'get API - Controlador',
        q,
        name,
        apiKey
    });
}

usuarios.post = async (req, res) => {

    const {name, mail, password, rol} = req.body;

    // const body = req.body;
    const usuario = new User({name, mail, password, rol});

    // Encriptar la contraseña HASS
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    
    // Guardar en BD
    await usuario.save();
    res.json({
        msg:'post API - Controlador',
        usuario
    });
}

usuarios.put = (req, res) => {

    const { id } = req.params;

    res.json({
        msg:'put API - Controlador',
        id
    });
}

usuarios.delete = (req, res) => {
    res.json({
        msg:'delete API - Controlador'
    });
}

usuarios.patch = (req, res) => {
    res.json({
        msg:'patch API - Controlador'
    });
}
export default usuarios;