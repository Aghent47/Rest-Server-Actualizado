import { response } from "express";
import { User } from "../models/user.js";
import bcrypt from 'bcryptjs';
import { generarJWT } from "../helpers/generar-jwt.js";

const login = async (req, res = response) => {

    const { mail, password } = req.body;


    try {

        // verificar si el mail existe
        const usuario = await User.findOne({ mail });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - mail'
            });
        }

        // verificar si el usuario esta activo

        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        //  verificar la contraseña

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - pass'
            });
        }

        // generar el JWT token

        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}

const googleSingIn = async (req, res = response) => {

    const { id_token } = req.body; // obteniendo el id_token en el backend

    res.json({
        msg: 'googleSingIn',
        id_token
    });
}

export default login;
export { googleSingIn };