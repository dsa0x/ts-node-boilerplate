import express, { Request, Response, NextFunction, Application } from "express";
// import bodyParser from "body-parser";

import cookieParser from "cookie-parser";
import cors from "cors";
import Logger from "morgan";
const app = express();

//parse incoming requests
//body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
//This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//We can use express.json() now

// export default ({ app }: { app: Application }) => {
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const corsOptions = {origin: 'http://localhost:3000',optionsSuccessStatus: 200} //optional
// app.options('*', cors()) // enable preflight requests
app.use(cors());
app.use(Logger("combined")); //To log messages
app.use(cookieParser()); //To parse cookies

//catch 404 errors
app.use((req: Request, res: Response, next: NextFunction) =>
  next(new Error("Not found"))
);
// };

export default app;
