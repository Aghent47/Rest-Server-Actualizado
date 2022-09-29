import express from 'express';
import 'dotenv/config';
import cors from 'cors';

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

        // CORS
        this.app.use(cors());

        // Public directory
        this.app.use(express.static('public'));

        // Read and parse body
        this.app.use(express.json());
    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.json({
                msg:'get API'
            });
        });
        this.app.post('/api', (req, res) => {
            res.json({
                msg:'post API'
            });
        });
        this.app.put('/api', (req, res) => {
            res.json({
                msg:'put API'
            });
        });
        this.app.delete('/api', (req, res) => {
            res.json({
                msg:'delete API'
            });
        });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }

}

export default Server;