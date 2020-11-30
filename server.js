import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors'
import bodyParser from 'body-parser';

 const app = express();
 const port = process.env.PORT || 8001
 //const jsonParser = bodyParser.json();

 const connection_url = "mongodb+srv://admin:0vu0NbuIgBV0Jhjn@cluster0.hitny.mongodb.net/tinderdb?retryWrites=true&w=majority";

 app.use(express.json());
 app.use(Cors());

 mongoose.connect(connection_url, {
     useNewUrlParser: true,
     useCreateIndex: true,
     useUnifiedTopology: true,
 });

 app.get('/', (req,res) => res.status(200).send("hello world"));

 app.post("/tinder/cards", (req, res) => {
     const dbCard = req.body;
     console.log(req.body);
     Cards.create(dbCard, (err, data) => {
         if(err) {
             res.status(500).send(err);
         } else {
             res.status(201).send(data);
             console.log(data);
         }
     });
 });

 app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
 });

 app.listen(port, () => console.log(`listening on local host: ${port}`));

 //0vu0NbuIgBV0Jhjn