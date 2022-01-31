const router = require('express').Router();
const { User, Post, Comment } = require('../../models')
const withAuth = require('../../utils/auth')

router.get('/', withAuth, (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }

    })
        .then(usertData => res.json(usertData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
})


router.get('/:id', withAuth, (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'post_content', 'created_at']
            },
            {
                model: Comment,
                attributes: ['id', 'post_content', 'created_at'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            }

        ]
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'Not user found with this id' });
                return;
            }
            res.json(userData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.post('/', withAuth, (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        twitter: req.body.twitter,
        github: req.body.github
    })
        .then(userData => {
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.username = userData.username;
                req.session.twitter = userData.twitter;
                req.session.github = userData.github;
                req.session.loggedIn = true;

                res.json(userData);
            });
        });
});


router.post('/login', withAuth, (req, res) => {
    User.findOne({
        where: {
            email: req.boday.email
        }
    })
        .then(userData => {
            if (!userData) {
                res.status(400).json({ message: 'No user with that email address!' })
                return;
            }

            const validPassword = userData.checkPassword(req.body.password);
            if (!validPassword) {
                res.status(404).json({ message: 'Incorrect Password' })
            }
            req.session.save(() => {
                req.session.user_id = userdata.id,
                    req.session.username = userData.username,
                    req.session.twitter = userData.twitter,
                    req.session.github = userData.github,
                    req.session.loggedIn = true

                res.json({ user: userData, message: "You are logged in" })
            })
        })
});

router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end()
        });
    } else {
        res.status(404).end();
    }
})

router.put('/:id', withAuth, (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(userData => {
            if (!userData[0]) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(userData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
})

router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;