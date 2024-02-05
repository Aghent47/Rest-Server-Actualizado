

export const esAdminRole = (req, res = response, next) => {

    if (!req.usuario) {
        return res.status(500).json({
            msg: 'Se quiere verificar el rol sin validar el token primero'
        });
    }

    const {rol, name} = req.usuario;
    if( rol !== 'ADMIN_ROLE' || rol !== 'SUPER_ROLE'){
        
        return res.status(401).json({
            msg: `${ name } no es adminitrador - Acceso no autoriado `
        });
    }

    next();

}