
import { ApiRoutes } from './routes/index.routes';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import express from "express";
import cors from 'cors';
import path from 'path';
import http from 'http';
import dbConnect from './_core/db';
import { migrateData } from './_core/db/migrate';

class App {
  public app: express.Application;
  public server: http.Server;
  
  constructor() {
    this.app = express();
    this.server = new http.Server(this.app);
    dbConnect().then(() => {
      migrateData();
    });
    this.routes();
  }
  
  private routes(): void {
    // Midlewares
    this.app.use(bodyParser.json());
    this.app.use(cors());

    //routes
    this.app.use(ApiRoutes.path, ApiRoutes.router);

    this.app.use((_req, res) => {
      res.status(404).json({
        success: false,
        message: 'Invalid route',
        result: {},
        statusCode: 404,
      });
    });
  }
}
  
export default new App().server;
  