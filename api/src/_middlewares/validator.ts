import { ERROR } from '../_constant';
import { Request, Response, NextFunction } from 'express';
import { handleError, sendResp } from '../_utils/response';
import { validationResult } from 'express-validator';


export const validator = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      next();
    } else {
      console.error('Field validation failed', error.mapped());
      const obj = error.mapped();
      ERROR.FIELD_VALIDATION_FAILED.message = "Some fields are invalid or absent";
      sendResp(res, ERROR.FIELD_VALIDATION_FAILED, obj);
    }
  } catch (err) {
    handleError(res, err, {});
  }
};