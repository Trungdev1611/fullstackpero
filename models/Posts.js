// tao bang trong database
module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    // quan he 1 nhieu: 1 nguoi co nhieu comment : khi dung dong lenh duoi day bang Comment se co them cot PostId cua bang Post
    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade"
        })
    }
    return Posts;
};