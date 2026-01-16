const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const imageRouter = require("./src/routes/image.routes");
require("dotenv").config();

const app = express();

// Security
app.use(helmet());

// --- FIXED + IMPROVED CORS ---
const allowedOrigins = [
    "http://localhost:5173",
    "https://waldo-frontend-three.vercel.app"
];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (mobile apps, Postman)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log("❌ Blocked by CORS:", origin);
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));

// JSON parser
app.use(express.json());

// Request logger
app.use(morgan("dev"));

// Routes
app.use("/", imageRouter);

module.exports = app;
