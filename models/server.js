import express from 'express';
import 'dotenv/config';

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3001;

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

    };

    middlewares(){

        // Public directory
        this.app.use(express.static('public'));

        // Read and parse body
        this.app.use(express.json());
    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.json('Hello World!!');
        });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }

}

export default Server;