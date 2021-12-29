'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('items', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.INTEGER
            },
            desc: {
                type: Sequelize.TEXT
            },
            photo: {
                type: Sequelize.STRING
            },
            id_seller: {
                type: Sequelize.INTEGER
            },
            id_category: {
                type: Sequelize.INTEGER
            },
            status: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
        await queryInterface.addConstraint('items', {
            fields: ['id_category'],
            type: 'foreign key',
            name: 'fk_items_to_categories',
            references: {
                table: 'categories',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        })
        await queryInterface.addConstraint('items', {
            fields: ['id_seller'],
            type: 'foreign key',
            name: 'fk_items_to_sellers',
            references: {
                table: 'sellers',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('items');
    }
};