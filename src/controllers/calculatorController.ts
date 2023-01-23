import { Request, Response } from "express";

const getLengthName = (req: Request, res: Response) => {
  const { name } = req.headers;

  const lengthName: number = name.length;

  res.send(`${lengthName}`);
};

export { getLengthName };
