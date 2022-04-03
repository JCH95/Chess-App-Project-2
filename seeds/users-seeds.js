// const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [{
    "username": "adionisii0",
    "password": "y7nUhskncIo",
    "email": "dfyers0@vk.com",
    "is_host": false
},
{
    "username": "kmellish1",
    "password": "NJsdNy",
    "email": "clemin1@google.pl",
    "is_host": true
},
{
    "username": "omacias2",
    "password": "K7aKPf",
    "email": "tliger2@addtoany.com",
    "is_host": false
},
{
    "username": "lrockingham3",
    "password": "scIvY5C",
    "email": "ibazley3@linkedin.com",
    "is_host": true
},
{
    "username": "gmixer4",
    "password": "1PbBI9lw",
    "email": "awoodburn4@usa.gov",
    "is_host": true
},
{
    "username": "jwittey5",
    "password": "StehJVlZSPaI",
    "email": "spetrusch5@bloomberg.com",
    "is_host": false
},
{
    "username": "jjeskin6",
    "password": "VlW644W8e",
    "email": "egregorowicz6@arizona.edu",
    "is_host": false
},
{
    "username": "tbandey7",
    "password": "CcQRvEx2",
    "email": "lbaddoe7@npr.org",
    "is_host": true
},
{
    "username": "eposner8",
    "password": "qweuUpxSK2",
    "email": "isimonian8@123-reg.co.uk",
    "is_host": true
},
{
    "username": "gduchesne9",
    "password": "3h4oiYKP5Y1A",
    "email": "lpennone9@nationalgeographic.com",
    "is_host": false
},
{
    "username": "lwelldrakea",
    "password": "gLxKySziKk",
    "email": "tmeneghellia@shinystat.com",
    "is_host": false
},
{
    "username": "mpleadenb",
    "password": "ky9w0rvyL",
    "email": "traggattb@usa.gov",
    "is_host": false
},
{
    "username": "saroninc",
    "password": "68eqMJl9t",
    "email": "rjirikc@arstechnica.com",
    "is_host": false
},
{
    "username": "scomleyd",
    "password": "S1cFp9oEv",
    "email": "mburkertd@unesco.org",
    "is_host": false
},
{
    "username": "gswindelle",
    "password": "GJm1hcf",
    "email": "mbrimmacombee@e-recht24.de",
    "is_host": false
},
{
    "username": "crubinchikf",
    "password": "jvcKcyoGbK",
    "email": "kliberof@cnbc.com",
    "is_host": true
},
{
    "username": "epautotg",
    "password": "H8r1esTM6YB",
    "email": "rkliementg@digg.com",
    "is_host": false
},
{
    "username": "rzanottih",
    "password": "wGWlIzp4LO",
    "email": "vkemwallh@creativecommons.org",
    "is_host": true
},
{
    "username": "cjocklei",
    "password": "KmyCWKj7D",
    "email": "dstoyelli@nba.com",
    "is_host": true
},
{
    "username": "hburlay14",
    "password": "58rxcjT",
    "email": "bhinrichs14@tiny.cc",
    "is_host": true
},
{
    "username": "kyarker15",
    "password": "oDVpU0C",
    "email": "phughland15@google.co.uk",
    "is_host": true
},
{
    "username": "chamblyn16",
    "password": "tJvzq7pQSeR",
    "email": "wcordes16@umn.edu",
    "is_host": false
},
{
    "username": "vwestman17",
    "password": "6qHqUrnJ",
    "email": "bkelsell17@examiner.com",
    "is_host": false
},
{
    "username": "gspiers18",
    "password": "Qsm8y3BB",
    "email": "rcall18@answers.com",
    "is_host": true
},
{
    "username": "kbraywood1g",
    "password": "Hg6Cc0p6g",
    "email": "czettoi1g@cocolog-nifty.com",
    "is_host": false
},
{
    "username": "mhansberry1h",
    "password": "wXeBw6xoH",
    "email": "gmccaughen1h@netvibes.com",
    "is_host": false
},
{
    "username": "radhams1i",
    "password": "EK1NjbHbY",
    "email": "cdecruz1i@arizona.edu",
    "is_host": false
}];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
