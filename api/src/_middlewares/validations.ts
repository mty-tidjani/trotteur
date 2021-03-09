import { check, ValidationChain } from "express-validator";


export const checkEmail = (email: string): ValidationChain => {
  return check(email)
    .exists()
    .withMessage(`${email} is required`)
    .isEmail()
    .withMessage(`${email} must be valid`)
    .trim();
};

export const checkBody = (val: string, minLength = 1): ValidationChain => {
  return check(val)
    .trim().exists().withMessage(`${val} is required`)
    .isLength({ min: minLength }).withMessage(`${val} must be valid`);
};

export const checkMongoId = (val: string): ValidationChain => {
  return check(val).exists().isMongoId().trim();
};

export const ckeckStatusCode = (val: string, codes: never): ValidationChain => {
  return check(val).custom((val) => Object.values(codes).includes(val))
    .trim().exists().withMessage(`${val} is required`)
    .isLength({ max: 3 }).withMessage(`${val} must be an existing code`);
};