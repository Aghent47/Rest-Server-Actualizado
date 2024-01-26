import { response, request } from "express";
const usuarios = {};
import {User} from '../models/user.js';

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

    // const {name, age} = req.body;

    const body = req.body;
    const usuario = new User( body );
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