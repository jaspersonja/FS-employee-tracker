const router = require('express').Router();
const userRoutes = require('./user-route');
const employeeRoutes = require('./employee-route');

// will need to select the correct files for these two lines of code. 
router.use('./');
router.use('./');

module.exports = router; 