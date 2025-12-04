const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("express-async-errors");
require("dotenv").config();

const errorHandler = require("./middlewares/errorHandler");
const imageRoutes = require("./routes/image.routes");
const sessionRoutes = require("./routes/session.routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/v1/images", imageRoutes);
app.use("/api/v1/sessions", sessionRoutes);

app.use(errorHandler);

module.exports = app;
