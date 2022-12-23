// THis route is for  the employee questions 

const router = require('express').Router();
//add file route into the code line
const { employee } = require('/');

router.post('/', async (req,res) => {
    try {
        const newEmployee = await employee.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newEmployee);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/', async (req,res) => {
    try {
        const employeeData = await employee.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id ,
            },
        });

        if (!employeeData) {
            res.status(404).json({ message: 'no employee found'});
            return;
        }

        res.status(200).json(employeeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router; 