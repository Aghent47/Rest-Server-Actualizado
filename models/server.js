import express from 'express';
import 'dotenv/config';

class Server{
    constructor(){
        this.app = express();

        this.app.use(express.static('public'));
        this.app.use(express.json());

        this.port = process.env.PORT || 3001;
        this.routes();
    };

    routes(){
        this.app.get('/', (req, res) => {
            res.send({ message: 'Hello World!!' });
        });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }

}

export default Server;