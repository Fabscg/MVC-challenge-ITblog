const { Post } = require('../models')

const postdata = [
    {
        title: 'Weathe App',
        post_content: 'Now "Weather App" is available for everyone',
        user_id: 10
    },
    {
        title: 'Tech Blog',
        post_content: 'Comming soon a very useful tool for developers',
        user_id: 8
    },
    {
        title: 'Code quiz',
        post_content: 'One of the best games ever!',
        user_id: 1
    },
    {
        title: 'Readme Generator',
        post_content: 'Reached 500000 suscribers.',
        user_id: 4
    },
    {
        title: 'Penguins',
        post_content: 'Just because we all love penguins',
        user_id: 7
    },
]

const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;