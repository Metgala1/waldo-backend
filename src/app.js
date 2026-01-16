const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const imageRouter = require("./src/routes/image.routes");

const app = express();

app.use(helmet());
app.use(cors({
    origin: "http://localhost:5173/",
    Credentials: true,
}));
app.use(express.json());


app.use("/", imageRouter)

module.exports = app;
