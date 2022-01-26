const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Article extends Model { }

Article.init(
    {

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'article'
    }
);

module.exports = Article;