export interface IResponseBAD {
  message: string;
  details: { [name: string]: unknown };
}

export interface IResponseOK {}

export interface IResponseSoftDelete {
  acknowledged: boolean;
  modifiedCount: number;
  upsertedId: string;
  upsertedCount: number;
  matchedCount: number;
}

/* 
import { Request, Response, NextFunction } from "express";
export interface IResponseOK<T> {
  ok?: boolean;
  message?: string;
  data?: T;
}

export interface IResponseBAD {
  ok?: boolean;
  message?: string;
  details?: { [name: string]: unknown };
}

export function sendSuccess<T>(res: Response, data?: T, msg?: string) {
  let reply: IResponseOK<T> = {
    ok: true,
    message: msg || "Success",
  };
  if (data) reply.data = data;
  res.status(200).json(reply);
}

export function sendError(res: Response, msg: string) {
  let reply: IResponseBAD = {
    ok: false,
    message: msg || "Internal server error",
  };
  res.status(500).json(reply);
}
*/
