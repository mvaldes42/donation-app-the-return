import { DataTypes, Sequelize } from 'sequelize'

export default function Transaction(sequelize: any) {
  const Transaction = sequelize.define(
    'transaction',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        values: ['Charge', 'Manual'],
        defaultValue: 'Charge'
      },
      refundedAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      donationId: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        references: {
          model: 'donation',
          key: 'id'
        }
      },
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
      }
    },
    {
      freezeTableName: true,
      tableName: 'transaction',
      paranoid: true
    }
  )

  Transaction.associate = (models: any) => {
    models.transaction.belongsTo(models.donation, { foreignKey: 'donationId' })
  }

  return Transaction
}
