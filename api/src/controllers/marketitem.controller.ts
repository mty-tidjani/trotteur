import { Request, response, Response } from "express";
import { ERROR, marketItemSCD, SUCCESS, userSCD } from "../_constant";
import { User } from "../models/user.model";
import { handleError, sendResp } from "../_utils/response";
import bcrypt from "bcrypt";
import { jwtTokenGenerator } from "../_utils/jwt.utils";
import { MarketItem } from "../models/marketitiem.model";
import { Types } from "mongoose";

export class MarketItemController {
  public static create = async (
    req: Request,
    res: Response
  ): Promise<unknown> => {
    const { title, price } = req.body;    
    try {
      const markIt = new MarketItem({
        title,
        price,
        url: '/img/' + req.file.filename,
      });
      console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
      
  
      await markIt.save()

      return sendResp(res, SUCCESS.MI_CREATED, markIt);
    } catch (err) {
      return handleError(res, err);
    }
  };

  public static update = async (
    req: Request,
    res: Response
  ): Promise<unknown> => {
    const { title, price, _id } = req.body;
    
    try {
      const item = await MarketItem.findById(_id);
      if (!item) return sendResp(res, ERROR.ITEM_NOT_FOUND);
  
      item.title = title ? title : item.title;
      item.price = price ? price : item.price;
      item.url = req.file?.filename ? '/img/' + req.file.filename : item.url;
  
      await item.save();
      console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
      

      return sendResp(res, SUCCESS.MI_UPDATED, item);
    } catch (err) {
      return handleError(res, err);
    }
  };

  public static delete = async (
    req: Request,
    res: Response
  ): Promise<unknown> => {
    const { miId } = req.params;

    try {

      const item = await MarketItem.findById(miId);
      
      if (!item) return sendResp(res, ERROR.ITEM_NOT_FOUND);

      item.scd = marketItemSCD.deleted;

      await item.save();
    
      return sendResp(res, SUCCESS.MI_DELETED, item);
    } catch (err) {
      return handleError(res, err);
    }
  };


  public static getOne = async (
    req: Request,
    res: Response
  ): Promise<unknown> => {
    const { miId } = req.params; 
    try {
      if (!Types.ObjectId.isValid(miId)) return sendResp(res, ERROR.BAD_REQUEST);

      const item = await MarketItem.findById(miId);

      if (!item) return sendResp(res, ERROR.ITEM_NOT_FOUND);

      return sendResp(res, SUCCESS.DEFAULT, item);

    } catch (err) {
      return handleError(res, err);
    }
  };

  public static getAll = async (
    req: Request,
    res: Response
  ): Promise<unknown> => {
    try {
      const all = await MarketItem.find({ scd: { $ne: marketItemSCD.deleted } });

      return sendResp(res, SUCCESS.DEFAULT, all);
      
    } catch (err) {
      return handleError(res, err);
    }
  };

}
