import { urlencoded, json } from "body-parser";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import flash from "connect-flash";
import hpp from "hpp";
import logger from "morgan";
import cors from "cors";
import { RequestHandler } from "express";

export const GlobalMiddleware: Array<RequestHandler> = [
  urlencoded({ extended: true, limit: "10kb" }),
  json({ limit: "10kb" }),
  logger("dev"), // common, dev,
  mongoSanitize(),
  flash(),
  hpp({
    whitelist: ["sort", "expands"],
  }),
  cors(),
  compression(),
];
