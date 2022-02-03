const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'This project it is awesome!!!',
        user_id: 6,
        post_id: 1
    },
    {
        comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
        user_id: 6,
        post_id: 8
    },
    {
        comment_text: 'We are impressed with handlebars making our work faster and easier,',
        user_id: 3,
        post_id: 10
    },
    {
        comment_text: 'Great library',
        user_id: 3,
        post_id: 18
    },
    {
        comment_text: 'Bootstrap is epic.',
        user_id: 7,
        post_id: 5
    },
]
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;