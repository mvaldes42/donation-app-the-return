module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('donation', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      thankYouComment: {
        type: Sequelize.STRING,
        allowNull: true
      },
      isAnonymous: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: true
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
        allowNull: true
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('donation')
  }
}
