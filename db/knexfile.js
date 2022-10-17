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

// module.exports = {
//   development: {
//     client: "postgresql",
//     connection: {
//       // TODO change to your db name
//       database: "bipi_assignment",

//       // change to your db user
//       user: "phanhuycong",
//       password: "postgres",
//     },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       tableName: "knex_migrations",
//     },
//   },
// };
