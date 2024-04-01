import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/move", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(749, () => {
  console.log(`Server is up and ready to play at http://localhost:749`);
});