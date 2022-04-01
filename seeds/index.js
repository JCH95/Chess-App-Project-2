// Querries for debugging
const sequelize = require("../config/connection"); // connection to db different due to inside seeds instead of root



sequelize.sync({ force: false }).then(() => {

});