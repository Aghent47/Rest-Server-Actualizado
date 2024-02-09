import { Schema, model } from 'mongoose';

const categoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true,
    },

    estado: {
        type: Boolean,
        default: true,
        require: true,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    }

});
export const Categoria = model('Categoria', categoriaSchema);