import { Schema } from "mongoose";

export const YYYYModelMiddleware = (schema: Schema) => {
  schema.pre("findOne", function (next) {
    console.log("YYYY Model Middleware");
    next();
  });
};
