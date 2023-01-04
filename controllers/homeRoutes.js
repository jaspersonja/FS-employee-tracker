const router = require('express').Router();
const { Employee, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try { //Get all employees and JOIN with user data
        const employeeData = await Employee.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
        });

        const employees = employeeData.map((employee) => employee.get({plain: true}));

        res.render('layouts/main', {
            employees,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//withAuth 
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Employee }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;