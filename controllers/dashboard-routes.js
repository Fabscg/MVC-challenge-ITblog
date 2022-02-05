const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

const withAuth = require("../utils/auth");

router.get("/edit/:id", withAuth, (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
  }).then((postData) => {
    const post = postData.get({ plain: true });
    res.render("edit-post", {
      layout: "dashboard",
      post,
      loggedIn: req.session.loggedIn,
    });
  });
});

router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
  })
    .then((postData) => {
      // serialize data before passing to template
      const posts = postData.map((post) => post.get({ plain: true }));
      // res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
      res.render("partials/post-info", {
        layout: "dashboard",
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
