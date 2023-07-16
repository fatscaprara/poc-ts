import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";

export default function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);
  if (error.type === "not_found") {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }

  if (error.type === "bad_request") {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}
