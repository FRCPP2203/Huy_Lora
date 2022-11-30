import * as express from "express";
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

import * as admin from "firebase-admin";

var serviceAccount = require("../serviceAccountKey.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://loranet-aa6eb-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const db = admin.database(app);

@Tags("ZZZZ")
@Route("/ZZZZ")
export class ZZZZController {
  @Get("/")
  @SuccessResponse(200, "ZZZZ")
  public async ZZZZPage(@Request() req: express.Request): Promise<any> {
    const res = (<any>req).res as express.Response;

    const NODE_A = await db.ref("NODE_A").get();
    const NODE_A_OBJ = {
      DOAM: NODE_A.child("DOAM").val(),
      DOAMDAT: NODE_A.child("DOAMDAT").val(),
      NHIETDO: NODE_A.child("NHIETDO").val(),
    };

    const NODE_B = await db.ref("NODE_B").get();
    const NODE_B_OBJ = {
      DOAM: NODE_B.child("DOAM").val(),
      DOAMDAT: NODE_B.child("DOAMDAT").val(),
      NHIETDO: NODE_B.child("NHIETDO").val(),
    };

    const STATUS1 = await db.ref("STATUS1").get();
    const STATUS1_OBJ = {
      LIGHT: STATUS1.child("LIGHT").val(),
      WATERPUMPL: STATUS1.child("WATERPUMPL").val(),
    };

    const STATUS2 = await db.ref("STATUS2").get();
    const STATUS2_OBJ = {
      LIGHT: STATUS2.child("LIGHT").val(),
      WATERPUMPL: STATUS2.child("WATERPUMPL").val(),
    };

    res.render("ZZZZPage", {
      title: "ZZZZ",
      data: { NODE_A_OBJ, NODE_B_OBJ, STATUS1_OBJ, STATUS2_OBJ },
    });
    return;
  }

  @Put("/light/:ref/:status")
  @SuccessResponse(201, "Toggle")
  @Response(500, "Can't Toggle")
  public async ZZZZLight(
    @Request() req: express.Request,
    @Path() ref: string,
    @Path() status: string
  ): Promise<void> {
    const res = (<any>req).res as express.Response;

    db.ref(ref).update({ LIGHT: status });
    return;
  }

  @Put("/pump/:ref/:status")
  @SuccessResponse(201, "Toggle")
  @Response(500, "Can't Toggle")
  public async ZZZZPump(
    @Request() req: express.Request,
    @Path() ref: string,
    @Path() status: string
  ): Promise<void> {
    const res = (<any>req).res as express.Response;

    db.ref(ref).update({ WATERPUMPL: status });
    return;
  }
}
