//this is the admin router file
import { BaseRoute } from '../base.routes';
import { AuthController } from '../../controllers/auth.controller';
import * as mdwr from './user.mdwr';
import { Router } from 'express';

export class AuthRoutes extends BaseRoute {
  public static path = '/auth';
  private static instance: AuthRoutes;

  private constructor() {
    super();
    this.init();
  }

  static get router(): Router {
    if (!AuthRoutes.instance) {
      AuthRoutes.instance = new AuthRoutes();
    }
    return AuthRoutes.instance.router;
  }

  private async init() {
    // userSignup
    this.router.post('/signup', mdwr.signup, AuthController.signup);
    // user signin
    this.router.post('/signin', mdwr.signin, AuthController.signin);
  
  }
}
