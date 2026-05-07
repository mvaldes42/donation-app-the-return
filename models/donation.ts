import { DataTypes, Sequelize } from 'sequelize'

export default function Donation(sequelize: any) {
  const Donation = sequelize.define(
    'donation',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // unix timestamp
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      thankYouComment: {
        type: DataTypes.STRING,
        allowNull: true
      },
      isAnonymous: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      freezeTableName: true,
      tableName: 'donation',
      paranoid: true
    }
  )

  Donation.associate = (models: any) => {
    models.donation.hasMany(models.transaction, { foreignKey: 'donationId' })
  }

  return Donation
}
