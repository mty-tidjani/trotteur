import { Request, Response } from "express";
import { ERROR, SUCCESS, userSCD } from "../_constant";
import { User } from "../models/user.model";
import { handleError, sendResp } from "../_utils/response";
import bcrypt from "bcrypt";
import { jwtTokenGenerator } from "../_utils/jwt.utils";
import { MarketItem } from "../models/marketitiem.model";

export class MarketItemController {
  public static create = async (
    req: Request,
    res: Response
  ): Promise<unknown> => {
    const { title, price } = req.body;
    // const email = sanitizeEmail(eml);
    try {
      return sendResp(res, SUCCESS.MI_CREATED, {});
    } catch (err) {
      return handleError(res, err);
    }
  };

  public static getAll = async (
    req: Request,
    res: Response
  ): Promise<unknown> => {
    try {
      const all = await MarketItem.find({});

      return sendResp(res, SUCCESS.DEFAULT, all);
    } catch (err) {
      return handleError(res, err);
    }
  };
}
