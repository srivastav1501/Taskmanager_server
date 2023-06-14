import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import path from 'path'

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();


app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Routes);
app.use(express.static(path.join(dirname, './client/build')))

app.get("*", function(req,res){
    res.sendFile(path.join(dirname, './client/build/index.html'))
})

const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));