const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "alessandro",
    password: "password123",
  },
  {
    id: 2,
    username: "julliane",
    password: "password123",
  },
  {
    id: 3,
    username: "fabs",
    password: "password123",
  },
  {
    id: 4,
    username: "daniel",
    password: "password123",
  },
  {
    id: 5,
    username: "kacper",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
