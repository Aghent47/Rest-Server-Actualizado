import { response, request } from "express";
import bcryptjs from 'bcryptjs';
import {User} from '../models/user.js';

const usuarios = {};

usuarios.get = async (req = request, res = response) => {

    const {limit = 6, desde = 0} = req.query;
    const usuarios = await User.find()
    .skip(Number(desde))
    .limit(Number(limit));
    res.json({
       usuarios
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

usuarios.put = async (req, res) => {

    const { id } = req.params;
    const {_id, password, google, mail, ...resto } = req.body;
    //Validar Id Contra BD

    if(password){
        // Encriptar la contraseña HASS
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await User.findByIdAndUpdate(id, resto);

    res.json({
        // msg:'put API - Controlador',
        usuario,
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