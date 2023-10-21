import express from "express";
import { pgGetAll } from "./middlewares/pg/index.js";

const app = express();
const PORT = 8080;

app.get("/", pgGetAll("get", "/"));

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Listening! @ port ${PORT}`);
});