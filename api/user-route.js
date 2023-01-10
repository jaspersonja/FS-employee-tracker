// This route is for the user profile.
const router = require('express').Router();
const { User } = require('../models');


//will need to add in the file needed
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


//will need to add in the file needed
router.post('/login', async (req, res) => {
    console.log("post login", req.body)
    try {
        const userData = await User.findOne({ where: { username: req.body.username}});
        console.log(userData);
        if (!userData || userData===null) {
            res
            .status(400)
            .json({ message: 'No User found, please try again'});
            return;
        }
        

        const validPassword = await userData.checkPassword(req.body.password); 
        if (!validPassword) {
            res
            .status(400)
            .json({ message: ' Incorrect password, please try again.'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_id = true;

            res.json({ username: userData, message: 'Congrats you are logged in!'});
        });
    } catch (err) {
        console.log(err.message)
        res.status(400).json({
            error: err,
            message: "im tired"
        });
    }
});

router.post('/logout', (req,res) => {
    if (req.session.logged_in){
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router; 