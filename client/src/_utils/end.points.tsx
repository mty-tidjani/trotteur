// Todo export this in .env
export const baseUrl = 'http://localhost:4040';
export const apiUrl = baseUrl + '/api';

export const MARKET_ITEMS = apiUrl + '/marketitems';

export const AUTH = `${apiUrl}/auth`;
export const AUTH_SIGNUP = `${AUTH}/signup`;
export const AUTH_SIGNIN = `${AUTH}/signin`;