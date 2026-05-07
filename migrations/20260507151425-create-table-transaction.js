module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transaction', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        values: ['Charge', 'Manual'],
        defaultValue: 'Charge'
      },
      refundedAmount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      donationId: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
        references: {
          model: 'donation',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('donation')
  }
}
