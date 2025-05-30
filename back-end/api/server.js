//  API significa Application Programming Interface
// tipos de requisições POST, GET, PUT, DELETE
// CRUD - Create Read Update Delete (POST GET PUT DELETE)
// endpoint
// Midlleware

import express from "express";
import cors from "cors";
import { db } from "./conect.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log("Servidor está escutando na porta " + PORT);
});
