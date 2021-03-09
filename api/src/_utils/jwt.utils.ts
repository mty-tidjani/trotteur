import jwt from "jsonwebtoken";
import config from "../_core/config";

export const jwtTokenGenerator = (
  data: string | Record<string, unknown> | Buffer
): string => {
  const tokenData = data || {};
  const token = jwt.sign(tokenData, config.jwt, {
    algorithm: "HS256",
    expiresIn: 5 * 24 * 60,
  });
  return token;
};

export const jwtTokenDecoder = (token: string): any => {
  try {
    const tokenData = jwt.verify(token, config.jwt, {
      algorithms: ["HS256"],
      ignoreExpiration: true,
    });
    if (!tokenData) return { failed: true };
    return { success: true, tokenData };
  } catch (err) {
    return { success: false };
  }
};
