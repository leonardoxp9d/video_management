import "reflect-metadata";

import express from "express";
import "express-async-errors";

import "./database";
import { routes } from "./routes";

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3336, () => {
    console.log("Server is running, in port 3336!");
});
