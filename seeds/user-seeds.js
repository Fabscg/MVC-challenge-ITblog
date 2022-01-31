const { User } = require('../models');


const userdata = [
    {
        username: 'alessandro',
        email: 'nwestnedge0@cbc.ca',
        github: 'alesmonde',
        password: 'password123',
    },
    {
        username: 'julliane',
        email: 'rmebes1@sogou.com',
        github: 'jwill',
        password: 'password123'
    },
    {
        username: 'fabs',
        email: 'cstoneman2@last.fm',
        github: 'Fabskickass',
        password: 'password123'
    },
    {
        username: 'daniel',
        email: 'ihellier3@goo.ne.jp',
        github: 'daniel',
        password: 'password123'
    },
    {
        username: 'kacper',
        email: 'gmidgley4@weather.com',
        github: 'gasparin',
        password: 'password123'
    },
]

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
