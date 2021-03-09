import { Router } from 'express';
import { BaseRoute } from './base.routes';
import { MarketItemRoutes } from './marketitem/marketitem.routes';
import { AuthRoutes } from './user/auth.routes';


export class ApiRoutes extends BaseRoute {

    public static path = '/api';
    private static instance: ApiRoutes;

    private constructor() {
      super();
      this.init();
    }

    static get router(): Router {
      //applying singleton method to create only one instance of the router class
      if (!ApiRoutes.instance) {
        ApiRoutes.instance = new ApiRoutes();
      }
      return ApiRoutes.instance.router;
    }

    private init() {
      // AuthRoutes
      this.router.use(AuthRoutes.path, AuthRoutes.router);
      this.router.use(MarketItemRoutes.path, MarketItemRoutes.router);
    }
}
