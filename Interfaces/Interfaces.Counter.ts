import { IQuery } from "./Interfaces.Common";

export interface ICounter {
  _id: string;
  seq?: number;
}

export interface ICounterQuery extends IQuery, ICounter {}

export interface ICounterParams {}
