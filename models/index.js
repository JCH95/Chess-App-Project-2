// import all models
const User = require('./User');
const Organization = require('./Organization');
const ChessData = require('./ChessData');

// create associations (how you set up your queries)
Organization.hasMany(User, {
    foreignKey: 'org_id'
});
User.hasOne(ChessData, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Organization, ChessData };
