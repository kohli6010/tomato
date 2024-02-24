import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';
import {AppDataSource} from './data-source';
import { HelloWorldRoutes } from './routes/helloworldRoutes';

export const app = express();
const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(cors(corsOptions));
app.use(cookieParser());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", (req, res) => {
    res.send("Hello World, after a long time.")
})


app.use("/", new HelloWorldRoutes().router);