// import all models
const User = require('./User');
const Organization = require('./Organization');


// create associations (how you set up your queries)
Organization.hasMany(User, {
    foreignKey: 'org_id',
    constraints: false
});
// User belongs to organization
// Users.hasOne(Organization, {
//     foreignKey: 'org_id',
//     // constraints: false
// });

module.exports = { User, Organization };