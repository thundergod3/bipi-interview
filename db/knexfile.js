const dotenv = require("dotenv");

dotenv.config({ path: ".env.development" });

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      max: 5,
      min: 0,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
