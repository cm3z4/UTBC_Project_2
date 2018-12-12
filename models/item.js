module.exports = function(sequelize, DataTypes) {
    let items = sequelize.define(
        "items",
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

            title: {
                type: DataTypes.STRING,
                allowNull: false
            },

            price: {
                type: DataTypes.STRING,
                allowNull: false
            },

            category: {
                type: DataTypes.STRING,
                allowNull: false
            },

            info: {
                type: DataTypes.STRING,
                allowNull: false
            },

            zipCode: {
                type: DataTypes.STRING,
                allowNull: false
            },

            imageUrl: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    );
    return items;
};
