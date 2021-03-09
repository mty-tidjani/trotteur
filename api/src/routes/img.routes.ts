//this is the admin router file
import { BaseRoute } from "./base.routes";
import { Router } from "express";
import path from 'path';
import fs from 'fs';

export class ImgRoutes extends BaseRoute {
  public static path = "/img";
  private static instance: ImgRoutes;

  private constructor() {
    super();
    this.init();
  }

  static get router(): Router {
    if (!ImgRoutes.instance) {
      ImgRoutes.instance = new ImgRoutes();
    }
    return ImgRoutes.instance.router;
  }

  private async init() {
    // userSignup
    this.router.get("/:img", (req, res) => {
      const img = req.params.img;

      const reqPath: string = req.baseUrl.substr(4).split(img).join('');
  
      const dirPath = `../../uploads/images${reqPath}`;
  
      let inUsePath = dirPath;

      console.log(path.join(__dirname, dirPath, img));
      
  
      if (!fs.existsSync(path.join(__dirname, dirPath, img))) return res.status(404).send('File not found');
  
      return res.sendFile(path.join(__dirname, dirPath, img));
    });
  }
}
