require("dotenv").config();
// This will establish a connection to the database
const Sequelize = require("sequelize");

// const sequelize = process.env.DB_URL
//   ? new Sequelize(process.env.DB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//       host: 'localhost',
//       dialect: 'postgres',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });
const sequelize = new Sequelize(process.env.POSTGRESURI, {
  dialect: "postgres",
});
module.exports = sequelize;
