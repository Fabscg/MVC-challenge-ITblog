const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.belongsTo(User, {
    through: 'user_name',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsToMany(User, {
    through: "username",
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.belongsToMany(Comment, {
    through: 'post_id',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});




module.exports = {
    User,
    Comment,
    Post
}