import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { UserInfo } from './UserInfo';

export interface UserAttributes {
  id: number;
  username: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type UserUserAttributesAttributes = 'id' | 'username' | 'email' | 'createdAt' | 'updatedAt';

export interface UserCreationAttributes extends Optional<UserAttributes, UserUserAttributesAttributes> { }

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id!: number;
    username!: string;
    email!: string;
    createdAt!: Date;
    updatedAt!: Date;

  static associate(models: any) {
  }
}

export default function (sequelize: Sequelize): void {
  User.init(
    {
      id: {
        allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
      username: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'Users',
      timestamps: true
    }
  );
}
