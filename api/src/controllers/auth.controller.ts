import { Request, Response } from "express";
import { ERROR, SUCCESS, userSCD } from "../_constant";
import { User } from "../models/user.model";
import { handleError, sendResp } from "../_utils/response";
import bcrypt from 'bcrypt';
import { jwtTokenGenerator } from "../_utils/jwt.utils";


export class AuthController {
  public static signup = async (req: Request, res: Response): Promise<unknown> => {
    const { userName, email: email, password } = req.body;
    // const email = sanitizeEmail(eml);
    try {
      if (!email) return sendResp(res, ERROR.EMAIL_INVALID);
      const usr = await User.findOne({ email });
      if (usr) return sendResp(res, ERROR.EMAIL_TAKEN);
      const user = new User({
        scd: userSCD.activated, // userSCD.unactive,
        usrNM: userName,
        email,
        pwdHash: bcrypt.hashSync(password, 12),
        lang: 'en',
      });

      await user.save();
      
      const rtn = { user: { _id: user._id, usrNM: user.usrNM }, token: ''};
      rtn.token = await jwtTokenGenerator({
        uid: user._id,
      });
      return sendResp(res, SUCCESS.ACCOUNT_CREATED, rtn);
      // return sendResp(res, SUCCESS.ACCOUNT_CREATED);
    } catch (err) {
      return handleError(res, err);
    }
  }

  public static signin = async (req: Request, res: Response): Promise<unknown> => {
    const { login, password } = req.body;
    const email = login;
    try {
      
      if (!email) return sendResp(res, ERROR.BAD_CREDENTIALS);
      const user = await User.findOne({ email }).select('+pwdHash');
      if (!user) return sendResp(res, ERROR.BAD_CREDENTIALS);
      const isPass = await user.isValidPassword(password);
      if (!isPass) return sendResp(res, ERROR.BAD_CREDENTIALS);

      const rtn = { user: { _id: user._id, usrNM: user.usrNM }, token: ''};
      rtn.token = await jwtTokenGenerator({
        uid: user._id,
      });

      return sendResp(res, SUCCESS.DEFAULT, rtn);
    } catch (err) {
      return handleError(res, err);
    }
  }
}