import { db } from "./conect.js";

const responseArtists = await db.collection("artists").deleteMany();

console.log(responseArtists);
