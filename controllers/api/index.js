const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const orgsRoutes = require('./organization-routes.js');


router.use('/users', userRoutes);
// update once we complete this route
// router.use('/orgs', orgsRoutes);


module.exports = router;
