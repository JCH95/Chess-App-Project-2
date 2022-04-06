const router = require('express').Router(); // Express handles interaction between client and server. 
// const sequelize = require('../config/connection'); // using sequlize which is ORM. This brings in the data.   // built in from model
const { User, Organization } = require('../models'); // schema for the data and tables


// These are the routes that serve up the webpage. 
// homepage (login)
router.get('/', (req, res) => {
    console.log('======================');
    res.render('homepage'); // Just render login page MAKE SURE THERE IS 
    // User.findAll({ // sequelize syntax. Pulls in post from models
    //     attributes: [
    //         'id',
    //         'username',
    //         'email',
    //         'wins',
    //         'losses',
    //         'elo',
    //         // update what we need from db
    //         [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count'] // 
    //     ],
    // include: [
    //     {
    //         model: Comment,
    //         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //         include: {
    //             model: User,
    //             attributes: ['username']
    //         }
    //     },
    //     {
    //         model: User,
    //         attributes: ['username']
    //     }
    // ]
    // })
    //     .then(dbData => {
    //         const posts = dbData.map(post => post.get({ plain: true }));

    //         res.render('homepage', { posts });
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json(err);
    //     });
});

// Get Login Page load up
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});


module.exports = router;
