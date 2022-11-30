import { Model, SchemaOptions } from "mongoose";
import { BMODEL } from "../Base/MODEL";

import { IYYYY } from "../Interfaces/Interfaces.YYYY";
import { YYYYModelMiddleware } from "../Middleware/Models/Middleware.Models.YYYY";

const definition = {
  KKKK: { type: String, required: true },
  TTTT: { type: Number },
  JJJJ: { type: Boolean },
  blocked: { type: Boolean, default: true },
};
const options: SchemaOptions = {};

const model = new BMODEL<IYYYY>("YYYY", "yyyy")
  .setup(definition, options)
  .setIndex({ KKKK: "text", TTTT: "text", JJJJ: "text" }, {})
  .setMiddleware(YYYYModelMiddleware);

export const YYYYModel: Model<IYYYY> = model.instance();

// const YYYY = new YYYYModel({
//   KKKK: "Bill",
//   TTTT: 12345,
//   JJJJ: true,
// });

// YYYYModel.create(YYYY);
