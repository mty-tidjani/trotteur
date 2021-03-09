import { Schema, model, Document } from "mongoose";
import { MODEL } from "../_constant";
import * as bcrypt from 'bcrypt';

export interface IUser extends Document {
    scd: string;
    usrNM: string;
    email: string;
    pwdHash: string;
    pwdLastUpdt: Date;
    vrifTkn: string;
    vrifTknDT: Date;
    lang: string;
    
    // defined down (userSchema.methods.isValidPassword)
    isValidPassword: (password: string) => Promise<boolean>, 
}

const userSchema:Schema<IUser> = new Schema({
  scd /* USER_STATUS_CODES */: { type: String, maxlength: 2 },
  email /* USR_NM */: { type: String, unique: true },
  usrNM /* USR_NM */: { type: String },
  pwdHash /* PASSWORD_HASH */: { type: String, select: false },
  pwdLastUpdt /* PASSWORD_LAST_UPDATE */: { type: Date },
  vrifTkn /* VERIRIFICATION_TOKEN */: { type: String, select: false },
  vrifTknDT /* VERIRIFICATION_TOKEN_DATE */: { type: Date, default: Date.now, select: false },
  lang /* LANGUAGE */: { type: String, maxlength: 3, default: 'en' },
}, {
  versionKey: false,
  collection: MODEL.USER
});

userSchema.methods.isValidPassword = function(password: string){
  return bcrypt.compare(password, this.pwdHash);
};

// Export user
export const User = model<IUser>(MODEL.USER, userSchema);
