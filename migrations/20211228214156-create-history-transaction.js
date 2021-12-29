'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('history_transactions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_seller: {
                type: Sequelize.INTEGER
            },
            id_transaction: {
                type: Sequelize.INTEGER
            },
            id_customer: {
                type: Sequelize.INTEGER
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
        await queryInterface.addConstraint('history_transactions', {
            fields: ['id_seller'],
            type: 'foreign key',
            name: 'fk_history_transactions_to_sellers',
            references: {
                table: 'sellers',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        })
        await queryInterface.addConstraint('history_transactions', {
            fields: ['id_transaction'],
            type: 'foreign key',
            name: 'fk_history_transactions_to_transactions',
            references: {
                table: 'transactions',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        })
        await queryInterface.addConstraint('history_transactions', {
            fields: ['id_customer'],
            type: 'foreign key',
            name: 'fk_history_transactions_to_customer',
            references: {
                table: 'customers',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('history_transactions');
    }
};