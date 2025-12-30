import express from 'express';
import morgan from 'morgan';
import indexRouter from './routes/indexRouter';
import cors from 'cors';

const server = express();

//Middlewares
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use(indexRouter);

export default server;
