const router = require('express').Router();
const sequelize = require('../config/connection'); // using sequlize which is ORM. This brings in the data.  
const { User, Organization } = require('../models'); // schema for the data and tables
const withAuth = require('../utils/auth');

// get all users for homepage
router.get('/', withAuth, (req, res) => {
    console.log('======================');
    User.findAll({
        attributes: [
            'id', 'username', 'email', 'is_Host', 'password', 'wins', 'losses', 'elo', 'org_id'
        ],
        include: {
            model: Organization,
            attributes: ['id', 'name']
        }
    })
        .then(dbHome => {
            cons
        })
    res.render(res);
});

// Login Page load up
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;
