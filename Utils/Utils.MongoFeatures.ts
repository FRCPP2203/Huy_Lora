import mongoose, { ObjectId } from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

export const mongoEpressions = (body: any) => {
  const regex =
    /[$]?(addToSet|push|pop|pull|pullAll|each|position|slice|sort|in|not)\b/g;
  let stringifyBody = JSON.stringify(body);
  stringifyBody = stringifyBody.replace(regex, (match) => `$${match}`);
  body = JSON.parse(stringifyBody);
  const operators: RegExpMatchArray | null = Object.keys(body)
    .join(",")
    .match(regex);
  let expressions: any;
  if (operators) {
    operators.forEach((operator: string) => {
      expressions[operator] = body[operator];
      delete body[operator];
    });
  }
  expressions = { ...expressions, $set: body };
  return expressions;
};

export const objectId = (id: string) => {
  if (id) return new ObjectId(id);
  return new ObjectId();
};

export const multipleMongooseToObject = (mongooses: any) => {
  return mongooses.map((mongoose: any) => mongoose.toObject());
};

export const mongooseToObject = (mongoose: any) => {
  return mongoose ? mongoose.toObject() : mongoose;
};

export const multipleMongooseToJSON = (mongooses: any) => {
  return mongooses.map((mongoose: any) => mongoose.toJSON());
};

export const mongooseToJSON = (mongoose: any) => {
  return mongoose ? mongoose.toJSON() : mongoose;
};
