const transactions = require('./100-last-donations.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let transactionsData = []
    let donationsData = []

    for (const transaction of transactions) {
      if (transaction.donation) {
        const donation = transaction.donation
        donationsData.push({
          id: donation.id,
          firstName: donation.firstName,
          lastName: donation.lastName,
          amount: donation.amount,
          thankYouComment: donation.thankYouComment,
          createdAt: new Date(donation.createdAtUtc),
          updatedAt: new Date()
        })
      }
      transactionsData.push({
        id: transaction.id,
        type: transaction.type,
        refundedAmount: transaction.refundedAmount,
        donationId: transaction.donation?.id || null,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    await queryInterface.bulkInsert('donation', donationsData)

    await queryInterface.bulkInsert('transaction', transactionsData)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('transaction', null, {})
    await queryInterface.bulkDelete('donation', null, {})
  }
}
