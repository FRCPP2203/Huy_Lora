import { Schema } from "mongoose";

export const XXXXModelMiddleware = (schema: Schema) => {
  schema.pre("findOne", function (next) {
    console.log("XXXX Model Middleware");
    next();
  });
};
