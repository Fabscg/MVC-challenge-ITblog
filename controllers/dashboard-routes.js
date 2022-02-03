const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

const withAuth = require('../utils/auth');



router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where:{ id:req.params.id },
        attributes:[
            'id', 'post_content', 'title', 'create_at'
        ],
        include:[
            {
                model:SVGTextContentElement,
                attributes:[
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id',
                    'created_at'
                ],
                inlcude:{
                    model:User,
                    attributes:['username']
                },
            },
            {
                model:User,
                attributes:['username']
            },
        ]
    })
        .then((postData => {
            const post = dbPostData.get({ plain:true });
            res.render('edit-post', { post, loggedIn: req.session.loggedIn})
        }))
});

router.get("/", withAuth, (req, res) => {
    Post.findAll({
       where: {
          
          user_id: req.session.user_id,
       },
       attributes: ["id", "post_content", "title", "created_at"],
       include: [
          {
             model: Comment,
          },
          {
             model: User,
             attributes: ["username"],
          },
       ],
    })
       .then((dbPostData) => {
          // serialize data before passing to template
          const posts = dbPostData.map((post) => post.get({ plain: true }));
          res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
       })
       .catch((err) => {
          console.log(err);
          res.status(500).json(err);
       });
 });

module.exports = router;