const router = require("express").Router();

router.use("/api", (req, res, next) => {
  try {
    res.send("API");
  } catch (error) {
    next(error);
  }
});

// 404 Error Handling
router.use((req, res, next) => {
  const err = new Error("404 Not Found");
  err.status = 404;
  next(err);
});

module.exports = router;
