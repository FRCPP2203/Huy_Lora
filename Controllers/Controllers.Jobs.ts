import { Agenda, Job, JobAttributesData } from "agenda";
import dayjs from "dayjs";
import { CONFIGS } from "../Config/Config.App";
import { Express, NextFunction, Request, Response } from "express";
import { Body, Get, Path, Post, Query, Route } from "tsoa";
import { IJobs, IJobsQuery } from "../Interfaces/Interfaces.Jobs";

const queue = new Agenda();

queue.database(CONFIGS.DB.MONGODB.LOCAL + CONFIGS.DB.MONGODB.NAME, "jobs");

queue.define("QQQQJob", async (job: Job) => {
  const data = job?.attrs?.data;
  console.log(
    "This job is running after a 5 second delay. This is the data that was sent:"
  );
  console.log(data);
});

queue.define("QQQQDelayJob", async (job: Job) => {
  const data = job?.attrs?.data;
  console.log(
    "This job is running after a 5 second delay. This is the data that was sent:"
  );
  console.log(data);
});

queue.start();

export const QueueManager = queue;

@Route("/jobs")
export class JobManager {
  @Get("/")
  public async viewQueue(): Promise<any> {
    const doc = await queue.jobs();
    return doc;
  }
  @Post("/:type/add")
  public async pushToQueue(
    @Path() type: string,
    @Body() body: IJobs["data"]
  ): Promise<void> {
    const allowedJobs = Object.keys(queue._definitions);
    if (!allowedJobs.includes(type)) return;
    switch (type) {
      case "QQQQJob":
        queue.now(type, body);
        break;

      case "QQQQDelayJob":
        queue.schedule(dayjs().add(0.5, "minute").format(), type, body);
        break;
    }
    return;
  }
}
