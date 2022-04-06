const { Organization } = require('../models');

const orgdata = [{
    "name": "Hutto Chess"
},
{
    "name": "Austin Chess Club"
},
{
    "name": "Ohhh SHEEET Chess Club"
},
{
    "name": "Jaxworks Chess Club"
}];

// Derrick look at this!
const seedOrganizations = () => Organization.bulkCreate(orgdata, { individualHooks: true });

module.exports = seedOrganizations;