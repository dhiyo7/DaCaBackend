'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('transactions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_customer: {
                type: Sequelize.INTEGER
            },
            id_seller: {
                type: Sequelize.INTEGER
            },
            total_price: {
                type: Sequelize.INTEGER
            },
            date: {
                type: Sequelize.DATE
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
        await queryInterface.addConstraint('transactions', {
            fields: ['id_customer'],
            type: 'foreign key',
            name: 'fk_transactions_to_customers',
            references: {
                table: 'customers',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        })
        await queryInterface.addConstraint('transactions', {
            fields: ['id_seller'],
            type: 'foreign key',
            name: 'fk_transactions_to_sellers',
            references: {
                table: 'sellers',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('transactions');
    }
};