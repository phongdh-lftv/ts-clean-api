import { DataTypes, Model, Sequelize } from 'sequelize';

export interface UserInfoAttributes {
  id: number;
  userId: number;
  fullName?: string | null;
  age?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInfoCreationAttributes extends Omit<UserInfoAttributes, 'id'> { }

export class UserInfo extends Model<UserInfoAttributes, UserInfoCreationAttributes> implements UserInfoAttributes {
  id!: number;
  userId!: number;
  fullName!: string | null;
  age!: number | null;
  createdAt!: Date;
  updatedAt!: Date;
}

export default function (sequelize: Sequelize): void {
  UserInfo.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      fullName: {
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'UserInfo',
      tableName: 'UserInfos',
      timestamps: true
    }
  );
}
