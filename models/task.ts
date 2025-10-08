import { DataTypes, Sequelize } from 'sequelize'

export default function Task(sequelize: Sequelize) {
  const Task = sequelize.define(
    'task',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      freezeTableName: true,
      tableName: 'task',
      paranoid: true
    }
  )

  return Task
}
