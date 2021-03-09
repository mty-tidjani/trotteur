import { validator, checkBody, checkEmail } from "../../_middlewares";

export const signup = [
  checkEmail("email"),
  checkBody("userName", 4),
  checkBody("password", 6),
  validator,
];

export const signin = [checkBody("login"), checkBody("password"), validator];
