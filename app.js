const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");   // <-- added
const imageRouter = require("./src/routes/image.routes");

const app = express();

// Security middleware
app.use(helmet());

// CORS setup
const allowedOrigins = [
  "http://localhost:5173",
  "https://waldo-frontend-three.vercel.app"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow curl/postman or server-side requests
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy does not allow access from: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));



// Body parser
app.use(express.json());

// Request logger (Morgan)
app.use(morgan("dev"));   // <-- logs all requests nicely in terminal

// Routes
app.use("/", imageRouter);

module.exports = app;
