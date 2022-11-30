import { Request, Response, NextFunction } from "express";
import {
  XXXXBodyValidate,
  XXXXQueryValidate,
} from "../Validations/Validations.XXXX";
import { validateInput } from "../Utils/Utils.Validation";

export class XXXXMiddleware {
  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const query = req.query;
    const valid = validateInput(XXXXQueryValidate, query);
    if (!valid) {
      res.status(422).json({
        message: "Invalid Query",
        data: query,
      });
      return;
    }
    console.log("PASS XXXX READ - GET", req.baseUrl);
    next();
  }

  public async post(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let body = req.body;
    const valid = validateInput(XXXXBodyValidate, body);
    if (!valid) {
      res.status(422).json({
        message: "Invalid Input",
        data: body,
      });
      return;
    }
    console.log("PASS XXXX WRITE - POST/PUT", req.baseUrl);
    next();
  }
}
