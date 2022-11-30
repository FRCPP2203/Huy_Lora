import { IQuery } from "./Interfaces.Common";

export interface IJobs {
  name?: string;
  data?: { [key: string]: any };
  priority?: number;
  shouldSaveResult?: boolean;
  type?: string;
  nextRunAt?: Date;
  lockedAt?: Date;
  lastRunAt?: Date;
  lastFinishedAt?: Date;
}

export interface IJobsQuery extends IQuery, IJobs {
  skip?: number;
}

export interface IJobsParams {}
