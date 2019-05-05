import {Table, Column, Model} from 'sequelize-typescript';

@Table
export class User extends Model<User> {

  @Column
  public user: string;

  @Column
  public password: string;
}
