import { Request, Response, NextFunction } from "express";
import {
  YYYYBodyValidate,
  YYYYQueryValidate,
} from "../Validations/Validations.YYYY";
import { validateInput } from "../Utils/Utils.Validation";

export class YYYYMiddleware {
  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const query = req.query;
    const valid = validateInput(YYYYQueryValidate, query);
    if (!valid) {
      res.status(422).json({
        message: "Invalid Query",
        data: query,
      });
      return;
    }
    console.log("PASS YYYY READ - GET", req.baseUrl);
    next();
  }

  public async post(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let body = req.body;
    const valid = validateInput(YYYYBodyValidate, body);
    if (!valid) {
      res.status(422).json({
        message: "Invalid Input",
        data: body,
      });
      return;
    }
    console.log("PASS YYYY WRITE - POST/PUT", req.baseUrl);
    next();
  }
}
