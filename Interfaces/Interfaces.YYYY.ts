import { IQuery } from "./Interfaces.Common";

export interface IYYYY {
  KKKK: string;
  TTTT?: number;
  JJJJ?: boolean;
  blocked?: boolean;
}

export interface IYYYYQuery extends IQuery, IYYYY {}

export interface IYYYYParams {}
