import Joi from "joi";
import { IXXXX, IXXXXQuery } from "../Interfaces/Interfaces.XXXX";

export const XXXXBodyValidate = Joi.object<IXXXX, true>().keys({
  ZZZZ: Joi.string().alphanum().min(3).max(30).required(),
  WWWW: Joi.number().integer().min(1970).max(2013).required(),
  TTTT: Joi.boolean(),
  blocked: Joi.boolean(),
});

export const XXXXQueryValidate = Joi.object<IXXXXQuery, true>().keys({
  sort: Joi.string(),
  search: Joi.string(),
  fields: Joi.string(),
  ZZZZ: Joi.string().alphanum().min(3).max(30),
  WWWW: Joi.number().integer().min(1970).max(2013),
  TTTT: Joi.boolean(),
  blocked: Joi.boolean(),
  page: Joi.number().min(1),
  limit: Joi.number().min(1),
});
