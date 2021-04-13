const { db } = require("./db");
const app = require("./index");

const PORT = process.env.PORT || 8080;
db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App Listening at http://localhost:${PORT}`);
  });
});
