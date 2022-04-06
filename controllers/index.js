// controllers are the logic of the db from backend to front end. 
const router = require('express').Router(); // Allows front-end(client) talk to the back-end(server). 

// const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js');

// Add back once the homeroutes has been updated/ is correct. 
router.use('/', homeRoutes);
// add back once dashbaordRoutes are correct
// router.use('/dashboard', dashboardRoutes);
// Add once the user-routes and org-routes are correct. 
// router.use('/api', apiRoutes);

module.exports = router;
