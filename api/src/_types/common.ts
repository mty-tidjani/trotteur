import { Request } from "express";

export type RichRequest = Request & {
    userId: string
}

export interface IResponse {
    success: boolean;
    statusCode: number;
    message: string;
    headerCode: number;
    result: unknown;
}

export interface IResponseMessage {
    success: boolean;
    statusCode: number;
    message: string;
    headerCode: number;
}