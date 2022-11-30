import Joi from "joi";
import { IYYYY, IYYYYQuery } from "Interfaces/Interfaces.YYYY";

export const YYYYBodyValidate = Joi.object<IYYYY, true>().keys({
  KKKK: Joi.string().alphanum().min(3).max(30).required(),
  TTTT: Joi.number().integer().min(1970).max(2013),
  JJJJ: Joi.boolean(),
  blocked: Joi.boolean(),
});

export const YYYYQueryValidate = Joi.object<IYYYYQuery, true>().keys({
  sort: Joi.string(),
  KKKK: Joi.string().alphanum().min(3).max(30),
  TTTT: Joi.number().integer().min(1970).max(2013),
  JJJJ: Joi.boolean(),
  blocked: Joi.boolean(),
  page: Joi.number().min(1),
  limit: Joi.number().min(1),
});
