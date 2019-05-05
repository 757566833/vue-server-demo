import { Model } from 'sequelize-typescript';

export interface IList extends Model<IList> {
    // createdAt?: Date;
    date?: Date;
    name?: string;
    address?: string;
}
