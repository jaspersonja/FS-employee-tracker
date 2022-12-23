// This route is for the user profile.
const router = require('express').Router();
const { User } = require('');


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
router.post('/', async (req,res) => {
    try {
        const userData = await User.findOne({ where: { user: req.body.user}});
        if (!userData) {
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

            res.json({ user: userData, message: 'Congrats you are logged in!'});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', (req,res) => {
    if (req.session.logged_in){
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router; 