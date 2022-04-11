const router = require('express').Router();
const sequelize = require('../config/connection'); // using sequlize which is ORM. This brings in the data.  
const { User, Organization } = require('../models'); // schema for the data and tables
const withAuth = require('../utils/auth');


// get all users for homepage and added withAuth to verify login. 
router.get('/', withAuth, (req, res) => {
    console.log('======================');
    User.findAll({
        where: { // hopefully this gets the user id for the specific user's data
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'username',
            'email',
            'wins',
            'losses',
            'elo'
        ],
        include: [
            {
                model: Organization,
                attributes: ['id', 'name'],
            }
        ]
    })
        .then(dbUserData => {
            const users = dbUserData.map(user => user.get({ plain: true }));
            res.render('homepage', { users, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
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
