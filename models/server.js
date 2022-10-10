import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from '../routes/users.js';
class Server{
    constructor(){
        this.app = express();
        this.usuariosPath = '/api/usuarios';
        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

    };

    middlewares(){

        // CORS
        this.app.use(cors());

        // Public directory
        this.app.use(express.static('public'));

        // Read and parse body
        this.app.use(express.json());
    }

    routes(){
       this.app.use( this.usuariosPath, router );
    }

    listen(){
        this.app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT }`);
        });
    }

}

export default Server;