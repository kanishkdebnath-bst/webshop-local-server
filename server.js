import express from 'express';
import appData from "./cloudshop/mock/appData.json" assert { type: "json" };
import productData from "./cloudshop/mock/productData.json" assert { type: "json" };
import cors from 'cors';

const app = express();

app.get("/", (request, response) => {
  response.status(200).send("Hello world")
})

app.use(cors());

app.get("/app", (request, response) => {
  response.status(200).json(appData)
})

app.get("/products", (request, response) => {
  response.status(200).json(productData)
})

app.listen(8080)