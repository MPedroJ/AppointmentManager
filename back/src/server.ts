import express, { type Request, type Response } from 'express';
import morgan from 'morgan';
import indexRouter from './routes/indexRouter';
import cors from 'cors';
import path from 'path';

const server = express();

//Middlewares
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

// API routes FIRST
server.use('/api', indexRouter);

// Static files and catch-all AFTER API routes
if (process.env.NODE_ENV === 'production') {
  // __dirname works directly in CommonJS
  const clientDistPath = path.join(__dirname, '../../front/dist');

  console.log('Serving static files from:', clientDistPath);

  server.use(express.static(clientDistPath));

  // Catch-all: send any non-API request to index.html
  server.use((req: Request, res: Response) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

export default server;
