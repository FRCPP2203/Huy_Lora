import { Schema } from "mongoose";

export const CounterModelMiddleware = (schema: Schema) => {
  schema.pre("findOne", function (next) {
    console.log("Counter Model Middleware");
    next();
  });
};
