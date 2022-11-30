import * as express from "express";
import { XXXXModel } from "../Models/Models.XXXX";
import { BCRUD } from "../Base/CRUD";
import {
  Tags,
  Route,
  Get,
  Post,
  Put,
  Delete,
  Path,
  Body,
  SuccessResponse,
  Middlewares,
  Query,
  Request,
  Response,
} from "tsoa";

import { IXXXX } from "../Interfaces/Interfaces.XXXX";
import { XXXXMiddleware } from "../Middleware/Middleware.XXXX";
import { IResponseSoftDelete } from "../Utils/Utils.Response";
import { ProvideSingleton } from "../Utils/Utils.ProvideSingleton";

const middleware = new XXXXMiddleware();
@Tags("XXXX")
@Route("/XXXX")
export class XXXXController {
  @Get("/test/:id")
  @SuccessResponse(200, "XXXX Test")
  public async XXXXGetOneTest(@Path() id: string): Promise<any> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.getTestByID(Number(id));
    return data;
  }

  @Get("/detail/:id")
  @Middlewares([middleware.get])
  @Response<IXXXX>(200, "XXXX Detail")
  public async XXXXGetOne(@Path() id: string): Promise<IXXXX> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.getOne(id);

    return data;
  }

  @Get("/")
  @Middlewares([middleware.get])
  @Response<IXXXX>(200, "XXXX Many")
  public async XXXXGetMany(
    @Request() req: express.Request,
    @Query() page?: number,
    @Query() limit?: number,
    @Query() sort?: string
  ): Promise<IXXXX[] | void> {
    const res = (<any>req).res as express.Response;
    let query = { ...req.query, page: page, limit: limit, sort: sort };

    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.getMany(query);

    return data;
  }

  @Get("/trash")
  @Middlewares([middleware.get])
  @Response<IXXXX>(200, "XXXX Trash")
  public async XXXXTrash(
    @Request() req: express.Request,
    @Query() page?: number,
    @Query() limit?: number,
    @Query() sort?: string
  ): Promise<IXXXX[]> {
    const res = (<any>req).res as express.Response;
    let query = { ...req.query, page: page, limit: limit, sort: sort };

    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.getDeleted(query);

    return data;
  }

  @Post("/create")
  @SuccessResponse(201, "Created") // Custom success response
  @Response(500, "Can't Created")
  @Middlewares([middleware.post])
  public async XXXXCreateOne(@Body() body: IXXXX): Promise<IXXXX> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.createOne(body);
    return data;
  }

  @Put("/update/:id")
  @SuccessResponse(201, "Updated") // Custom success response
  @Response(500, "Can't Update")
  @Middlewares([middleware.post])
  public async XXXXUpdateOne(
    @Path() id: string,
    @Body() body: IXXXX
  ): Promise<IXXXX> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.updateOne(id, body);
    return data;
  }

  @Delete("/move-to-trash/:id")
  @SuccessResponse(201, "Moved To Trash") // Custom success response
  @Response(500, "Can't Moved To Trash")
  public async XXXXSoftDeleteOne(
    @Path() id: string
  ): Promise<IResponseSoftDelete> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.moveToTrash(id);
    return data;
  }

  @Delete("/delete/:id")
  @SuccessResponse(201, "Deleted") // Custom success response
  @Response(500, "Can't Delete")
  public async XXXXDeleteOne(@Path() id: string): Promise<IXXXX> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.deleteOne(id);
    return data;
  }
}
