import { Model } from 'sequelize-typescript';

export interface IUser extends Model<IUser> {
    // createdAt?: Date;
    user?: string;
    password?: string;
    isAdmin?: number;
}
