import { response } from "express";

const login = (req, res = response) => {
    res.json({
        msg: 'login Ok',
    });
}

export default login;