import express, { Express, Request, Response } from "express";
import { MoveRequest, MoveResponse } from './types'
import { handleMove } from './handleMove'
import cors from 'cors'

const app: Express = express();

app.use(express.json())
app.use(cors())

app.post("/move", (req: Request<{},{},MoveRequest>, res: Response<MoveResponse>) =>{ 
    handleMove(req.body, res)
});

app.listen(749, () => {
  console.log(`Server is up and ready to play at http://localhost:749`);
});