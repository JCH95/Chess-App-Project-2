const router = require('express').Router();
const sequelize = require('../config/connection'); // using sequlize if we need to get data from a tables... not used yet
const { User, Organization } = require('../models'); // schema for the data and tables
const withAuth = require('../utils/auth');

// get all users for homepage and added withAuth to verify login. 
router.get('/', withAuth, (req, res) => {
    console.log('======================');
    console.log(req.session);

    // This is to get all user information!!!!!
    User.findAll({
        // where: { // hopefully this gets the user id for the specific user's data
        //     user_id: req.session.user_id
        // },
        attributes: [
            'id',
            'username',
            'email',
            'wins',
            'losses',
            'elo'
        ]
    })
        .then(dbUserData => {
            const users = dbUserData.map(user => user.get({ plain: true }));
            const user = users[req.session.user_id - 1]
            res.render('homepage', { user, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



// get single user stuff
router.get('/user/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.session.id
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
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            const user = dbUserData.get({ plain: true });
            console.log('henlo there');
            res.render('homepage', {
                user,
                loggedIn: true
            });
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


router.get('/rankings-individual', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/rankings-individual');
        return;
    }
    res.render('login');
});


router.get('/clubpage', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/clubpage');
        return;
    }
    res.render('login');
});


router.get('/user-profile', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/user-profile');
        return;
    }
    res.render('login');
});

module.exports = router;