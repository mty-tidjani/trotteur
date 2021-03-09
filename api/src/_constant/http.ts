export const HTTP_CODE = {
  OK: 200,
  CREATED: 201,
  UPDATED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  ACCESS_FORBIDDEN: 403,
  URL_NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  UNREGISTERED: 410,
  EMAIL_REQUIRED: 411,
  PAYLOAD_TOO_LARGE: 413,
  CONCURRENT_LIMITED_EXCEEDED: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SHUTDOWN: 503,
};

const succes = (message = "Succesfull query!", headerCode = HTTP_CODE.OK) => ({
  headerCode,
  message,
  statusCode: HTTP_CODE.OK,
  success: true,
});

const error = (
  message = "Something went wrong!",
  headerCode = HTTP_CODE.BAD_REQUEST,
  statusCode = HTTP_CODE.OK
) => ({
  headerCode,
  message,
  statusCode,
  success: false,
});

export const SUCCESS = {
  DEFAULT: succes(),
  ACCOUNT_CREATED: succes("Account created!", HTTP_CODE.CREATED),
  MI_CREATED: succes("MarketItem created!", HTTP_CODE.CREATED),
};

export const ERROR = {
  DEFAULT: error(),
  FIELD_VALIDATION_FAILED: error("Field validation failed"),
  JWT_TOKEN_INVALID: error("Invalid JWT!", HTTP_CODE.UNAUTHORIZED),
  EMAIL_INVALID: error("Invalid Email!", HTTP_CODE.OK, 10),
  EMAIL_TAKEN: error("Invalid Email!", HTTP_CODE.OK, 11),
  BAD_CREDENTIALS: error(
    "Credentials provided do not match our records!",
    HTTP_CODE.OK,
    12
  ),
};
