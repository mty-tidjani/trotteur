import { IResponseMessage } from "../_types/common";
import { Response } from "express";

export const sendResp = (
  res: Response,
  msg: IResponseMessage,
  result?: unknown
): unknown => {
  const mappedResponse = {
    success: msg.success,
    message: msg.message,
    statusCode: msg.statusCode,
    result,
  };

  return res.status(msg.headerCode).json(mappedResponse);
};

export const handleError = (
  res: Response,
  err: Error,
  result?: unknown
): unknown => {
  return res.status(500).json({
    success: false,
    message: "Internal server error",
    statusCode: 500,
    result,
  });
};
