// import dependencies
import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";
import cors from "cors";

import mongoMessages from "./messageModel.js";

// app config
const app = express();
const port = process.env.PORT || 9000;
// middlewares

// db config

const mongoURI = `mongodb+srv://admin:0KgxP0of87xnrqPu@cluster0.kqbya.mongodb.net/messengerdb?retryWrites=true&w=majority`;
mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DB Connected");
});

// api routes

app.get("/", (req, res) => res.status(200).send("Hello world"));

// listen

app.listen(port, () => console.log(`listening on localhost:${port}`));
