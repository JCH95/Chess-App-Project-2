// const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [{
    "username": "emansbridge0",
    "password": "HqhRZHY",
    "email": "sparidge0@nytimes.com",
    "is_Host": true,
    "wins": 80,
    "losses": 8,
    "elo": 6749,
    "org_id": 3
}, {
    "username": "rpendred1",
    "password": "MPsF8giKX",
    "email": "hmelby1@toplist.cz",
    "is_Host": true,
    "wins": 19,
    "losses": 53,
    "elo": 1168,
    "org_id": 3
}, {
    "username": "rnutley2",
    "password": "ZahGe8HHU",
    "email": "miiannoni2@cafepress.com",
    "is_Host": true,
    "wins": 19,
    "losses": 8,
    "elo": 4617,
    "org_id": 2
}, {
    "username": "dbetteridge3",
    "password": "s4KrNL5PTtZL",
    "email": "tmussalli3@scribd.com",
    "is_Host": false,
    "wins": 34,
    "losses": 34,
    "elo": 1424,
    "org_id": 3
}, {
    "username": "erubens4",
    "password": "bMRJcY2zwI",
    "email": "jjohann4@wikipedia.org",
    "is_Host": true,
    "wins": 59,
    "losses": 36,
    "elo": 3131,
    "org_id": 1
}, {
    "username": "sdadswell5",
    "password": "yWrlLc8RPe",
    "email": "jbrookz5@youtu.be",
    "is_Host": true,
    "wins": 82,
    "losses": 15,
    "elo": 4799,
    "org_id": 1
}, {
    "username": "hmitchiner6",
    "password": "Ebam32sSpr",
    "email": "agwyn6@storify.com",
    "is_Host": false,
    "wins": 3,
    "losses": 40,
    "elo": 2363,
    "org_id": 1
}, {
    "username": "cpawden7",
    "password": "N9QzwM",
    "email": "bkrinks7@boston.com",
    "is_Host": true,
    "wins": 12,
    "losses": 75,
    "elo": 7441,
    "org_id": 1
}, {
    "username": "kklos8",
    "password": "DTkUHKk",
    "email": "bsherbrooke8@blog.com",
    "is_Host": false,
    "wins": 89,
    "losses": 32,
    "elo": 2361,
    "org_id": 2
}, {
    "username": "spurkiss9",
    "password": "lt3RrswTzxI",
    "email": "lleyre9@ehow.com",
    "is_Host": false,
    "wins": 82,
    "losses": 35,
    "elo": 5132,
    "org_id": 3
}];

// 
const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;