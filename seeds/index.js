// imports for the seeds
const seedUsers = require('./users-seeds');
const seedOrgs = require('./organization-seeds');

// Querries for debugging
const sequelize = require("../config/connection"); // connection to db different due to inside seeds instead of root


// SeedALL function
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedOrgs();
    console.log('--------------');
    await seedUsers();
    process.exit(0);
};

// Call of the function
seedAll();