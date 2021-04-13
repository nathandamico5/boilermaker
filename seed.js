const { db, User } = require("./server/db");

const seed = async () => {
  try {
    await db.sync({ force: true });

    // Seed Projects
    await User.create({
      username: "username",
      password: "password",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;
if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seeding success!");
      db.close();
    })
    .catch((err) => {
      console.error("Oh noes! Something went wrong!");
      console.error(err);
      db.close();
    });
}
