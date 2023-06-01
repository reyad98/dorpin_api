// import dotenv from "dotenv";
// import mysql from "mysql";

// dotenv.config(); // Load the environment variables from the .env file

// export const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   port: process.env.DB_PORT || 8800,
// });


import mysql from "mysql";


export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "blog",
});

