import {
  validator,
  checkBody,
  checkEmail,
} from '../../_middlewares';


export const create = [
  checkEmail('title'),
  checkBody('price'),
  validator,
];
