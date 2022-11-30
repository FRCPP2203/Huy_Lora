import { IQuery } from "./Interfaces.Common";

export interface IXXXX {
  ZZZZ: string;
  WWWW: number;
  TTTT?: boolean;
  blocked?: boolean;
}

export interface IXXXXQuery extends IQuery, IXXXX {}

export interface IXXXXParams {}
