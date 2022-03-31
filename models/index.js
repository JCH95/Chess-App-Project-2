// import all models
const User = require('./User');
const Organization = require('./Organization');
const ChessData = require('./ChessData');

// create associations
User.hasMany(Organization, {
    foreignKey: 'user_id'
});

ChessData.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});


module.exports = { User, Organization, ChessData };
