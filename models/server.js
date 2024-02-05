import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from '../routes/users.js';
import auth from '../routes/auth.js'
import {dbConnection}  from '../database/config.js'; // importar la conexion a la base de datos desde 'database/conf
export class Server{
    constructor(){
        this.app = express();
        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth';
        // conectar a la base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

    };

    async conectarDB(){
        await dbConnection();
    }
    
    middlewares(){

        // CORS
        this.app.use(cors());

        // Public directory
        this.app.use(express.static('public'));

        // Read and parse body
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.authPath, auth),
        this.app.use( this.usuariosPath, router );
    }

    listen(){
        this.app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT }`);
        });
    }

}