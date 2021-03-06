const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyparser = require("body-parser");

// const dotenv = require("dotenv");
// dotenv.config();

// Initialize App
const app = express();

// Middleware
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../public")));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// API Routes
app.use("/api", require("./apiRoutes"));

// Send index.html for non API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// 500 Error Handling
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
