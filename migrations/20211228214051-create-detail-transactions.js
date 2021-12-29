'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('detail_transactions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_item: {
                type: Sequelize.INTEGER
            },
            id_transaction: {
                type: Sequelize.INTEGER
            },
            qty_item: {
                type: Sequelize.INTEGER
            },
            subtotal: {
                type: Sequelize.INTEGER
            },
            price_item: {
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
        await queryInterface.addConstraint('detail_transactions', {
            fields: ['id_item'],
            type: 'foreign key',
            name: 'fk_detail_transactions_to_items',
            references: {
                table: 'items',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        })
        await queryInterface.addConstraint('detail_transactions', {
            fields: ['id_transaction'],
            type: 'foreign key',
            name: 'fk_detail_transactions_to_transactions',
            references: {
                table: 'transactions',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('detail_transactions');
    }
};