import { CallbackError, MongooseError, QueryOptions, Schema } from "mongoose";
import { ICounter } from "../../Interfaces/Interfaces.Counter";
import { ICounterPlugin } from "../../Interfaces/Interfaces.Plugin";
import { CounterModel } from "../../Models/Models.Counter";

export const mongoSequence = (schema: Schema, parameters: ICounterPlugin) => {
  schema.pre("save", function (next) {
    let doc = this;
    CounterModel.findByIdAndUpdate(
      parameters.id,
      { $inc: { seq: 1 } },
      { new: true, upsert: true },
      function (error: CallbackError, counter: ICounter) {
        if (error) {
          return next(error);
        }
        doc._id = counter.seq;
        next();
      }
    );
  });
};
