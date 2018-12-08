module.exports = function(sequelize, DataTypes) {
    let users = sequelize.define(
        "users",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            user: {
                type: DataTypes.STRING,
                allowNull: false
            },

            pass: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    );
    return users;
};
