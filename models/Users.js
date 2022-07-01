// tao bang trong database
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
    // quan he 1 nhieu: 1 nguoi co nhieu comment : khi dung dong lenh duoi day bang Comment se co them cot PostId cua bang Post
    // Users.associate = (models) => {
    //     Users.hasMany(models.Posts, {
    //         onDelete: "cascade",
    //         onUpdate: "cascade"
    //     })
    // }
    return Users;
};