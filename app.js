const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");   // <-- added
const imageRouter = require("./src/routes/image.routes");

const app = express();

// Security middleware
app.use(helmet());

// CORS setup
app.use(cors({
    origin: ["http://localhost:5173" , "https://waldo-frontend-three.vercel.app/"], 
    credentials: true,
}));

// Body parser
app.use(express.json());

// Request logger (Morgan)
app.use(morgan("dev"));   // <-- logs all requests nicely in terminal

// Routes
app.use("/", imageRouter);

module.exports = app;
