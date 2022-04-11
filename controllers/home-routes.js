const router = require('express').Router();
const sequelize = require('../config/connection'); // using sequlize which is ORM. This brings in the data.  
const { Users, Organization } = require('../models'); // schema for the data and tables
const withAuth = require('../utils/auth');

// get all users for homepage
router.get('/', withAuth, (req, res) => {
    console.log('======================');
    Users.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id', 'username', 'email', 'is_Host', 'password', 'wins', 'losses', 'elo',
        ],
        // include: {
        //     model: Organization,
        //     attributes: ['id', 'name']
        // }
    })
        .then(dbUserData => {
            const users = dbUserData.map(user => user.get({ plain: true }));
            res.render('homepage', {
                users, 
                loggedIn: req.session.loggedIn 
            });
        })
});

// Login Page load up
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/homepage');
        return;
    }
    res.render('login');
});

module.exports = router;
