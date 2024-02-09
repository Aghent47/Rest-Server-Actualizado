import { request, response } from "express";
import { Categoria } from "../models/index.js";

export const crearCategoria = async (req, res = response) => {

    const nombre = req.body.nombre.toUpperCase();
    const categoriaDB = await Categoria.findOne({ nombre });

    if (categoriaDB) {
        return res.status(400).json({
            msg: `La categoria ${nombre} ya existe`
        });
    }

    // Generar la data a guardar
    const data = {
        nombre,
        usuario: req.usuario._id
    }

    const categoria = new Categoria(data);

    //guardar en BD
    await categoria.save();

    res.status(201).json(categoria);

}

export const obtenerCategorias = async (req= request, res = response) => {
    const {limit = 5, desde = 0} = req.query;
    const query = {estado: true};

    const [ categorias, total ] = await Promise.all([
        Categoria.find(query)
        .skip(Number(desde))
        .limit(Number(limit)),
        Categoria.countDocuments({estado: true})
    ]);
   
    res.json({
        msg: 'get API - categorias',
        total,
        categorias
        
    });
}