import { Request, Response, NextFunction } from "express";
export const catchAsync =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await fn(req, res, next).catch(next);
  };
