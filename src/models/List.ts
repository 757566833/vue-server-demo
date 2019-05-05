import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class List extends Model<List> {

  @Column
  public date: Date;

  @Column
  public name: string;

  @Column
  public address: string;
}
