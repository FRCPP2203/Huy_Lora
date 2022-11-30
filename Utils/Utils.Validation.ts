import Joi from "joi";

export const validateInput = (schema: Joi.ObjectSchema<any>, input: any) => {
  const { value, warning, error } = schema.validate(input);
  // console.log(value, warning, error);
  return error == null;
};
