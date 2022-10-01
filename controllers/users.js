const usuarios = {};

usuarios.get = (req, res) => {
    const {q,name = 'No Name', apiKey} = req.query;

    res.json({
        msg:'get API - Controlador',
        q,
        name,
        apiKey
    });
}

usuarios.post = (req, res) => {
    const {name, age} = req.body;
    res.json({
        msg:'post API - Controlador',
        name,
        age
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