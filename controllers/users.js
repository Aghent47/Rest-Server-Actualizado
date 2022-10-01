const usuarios = {};

usuarios.get = (req, res) => {
    res.json({
        msg:'get API - Controlador'
    });
}

usuarios.post = (req, res) => {
    res.json({
        msg:'post API - Controlador'
    });
}

usuarios.put = (req, res) => {
    res.json({
        msg:'put API - Controlador'
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