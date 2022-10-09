import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from './routes/users.js';
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.server_host = '0.0.0.0';
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
        this.app.listen(this.port, this.server_host, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }

}

export default Server;