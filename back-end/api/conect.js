// JavaScript Assincrono
// await async
// FullFilled preenchido, promessa completada

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://LuizFCDO:LuizFelipeCDO@cluster0.6ydqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
