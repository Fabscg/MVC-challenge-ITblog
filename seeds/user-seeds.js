const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "alessandro",
    email: "alex@gmail.com",
    password: "password123",
  },
  {
    id: 2,
    username: "julliane",
    email: "jull@gmail.com",
    password: "password123",
  },
  {
    id: 3,
    username: "fabs",
    email: "fabs@gmail.com",
    password: "password123",
  },
  {
    id: 4,
    username: "daniel",
    email: "daniel@gmail.com",
    password: "password123",
  },
  {
    id: 5,
    username: "kacper",
    email: "kacper@gmail.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
