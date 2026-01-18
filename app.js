const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");   // <-- added
const imageRouter = require("./src/routes/image.routes");
require("dotenv").config();

const app = express();

// Security middleware
app.use(helmet());

// CORS setup
app.use(cors({
    origin:  process.env.FRONTEND_URL, 
    credentials: true,
}));


// Body parser
app.use(express.json());

// Request logger (Morgan)
app.use(morgan("dev"));   // <-- logs all requests nicely in terminal

// Routes
app.use("/", imageRouter);

module.exports = app;
