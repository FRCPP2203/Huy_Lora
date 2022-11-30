import { IPagination } from "./Interfaces.Pagination";

export interface IQuery extends IPagination {
  sort?: string;
  search?: string;
  fields?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
