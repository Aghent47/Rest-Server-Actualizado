import { Role, User, Categoria} from '../models/index.js';

export const esRolevalido = async(rol = '') => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la BD`);
    }
}

export const emailExiste = async (mail = '') => {
    // verificar si el correo existe
    const existeEmail = await User.findOne({mail});
    if(existeEmail){
        throw new Error(`El correo ${mail} ya esta registrado`);
    }
}

export const existeUserById = async (id) => {
    // verificar si el id existe
    const existeById = await User.findById(id);

    if(!existeById){
        throw new Error(`El id ${id} no existe!!`);
    }
}

export const existeCategoriaById = async (id) => {
    // verificar si el id existe
    const existeById = await Categoria.findById(id);

    if(!existeById){
        throw new Error(`El id ${id} de la categoria no existe!!`);
    }
}