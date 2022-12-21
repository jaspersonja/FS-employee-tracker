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

        res.render('homepage', {
            employees,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});