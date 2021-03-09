//this is the admin router file
import { BaseRoute } from "../base.routes";
import { MarketItemController } from "../../controllers/marketitem.controller";
import * as mdwr from "./marketitem.mdwr";
import { Router } from "express";
import { jwtAuthVerify } from "../../_middlewares";

export class MarketItemRoutes extends BaseRoute {
  public static path = "/marketitems";
  private static instance: MarketItemRoutes;

  private constructor() {
    super();
    this.init();
  }

  static get router(): Router {
    if (!MarketItemRoutes.instance) {
      MarketItemRoutes.instance = new MarketItemRoutes();
    }
    return MarketItemRoutes.instance.router;
  }

  private async init() {
    // LIST
    this.router.get("/", MarketItemController.getAll);
    // Create
    this.router.post("/", mdwr.uploadFile.single("file"), mdwr.create, MarketItemController.create);

    this.router.put("/", mdwr.uploadFile.single("file"), mdwr.create, MarketItemController.update);
  }
}
