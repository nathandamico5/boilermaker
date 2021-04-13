const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyparser = require("body-parser");

// Initialize App
const app = express();

// Middleware
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "/public/index.html")));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// API Routes
app.use("/api", require("./apiRoutes"));

// Send index.html for non API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// 500 Error Handling
app.use((error, req, res, next) => {
  console.error(error);
  console.error(error.stack);
  res
    .status(error.status || 500)
    .send(error.message || "Internal server error.");
});

// Set App to listen at PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App Listening at http://localhost:${PORT}`);
});