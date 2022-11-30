import mongoose, { Schema } from "mongoose";

import { ICounter } from "../Interfaces/Interfaces.Counter";
// import { CounterModelMiddleware } from "../Middleware/Models/Middleware.Models.Counter";

let schema = new Schema<ICounter>({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

schema.index({ _id: 1, seq: 1 }, { unique: true });

// CounterModelMiddleware(schema);

export const CounterModel = mongoose.model<ICounter>(
  "Counter",
  schema,
  "counters"
);
