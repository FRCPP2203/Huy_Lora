import http from "http";
import createError from "http-errors";
import express, { Express, Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";
import { GlobalMiddleware } from "./Config/Config.GlobalMiddleware";
import { setViews, setPublic } from "./Config/Config.View";
import { ErrorHandler } from "./Middleware/Middleware.ErrorHandler";
import { RegisterRoutes } from "./Routes/routes";

const app: Express = express();
const server: http.Server = http.createServer(app);
const PORT: number = 8888;

process.on("uncaughtException", (err: Error) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
}

// use global middlewares
app.use(GlobalMiddleware);

// init && connect to DB
import { DBConn } from "./DB/DB.Connect";
DBConn();

// init view engine
setViews(app, __dirname);

// set public folders
setPublic(app, express, __dirname);

// init Swagger Doc
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

// init routes
RegisterRoutes(app);

// error handler
app.use(ErrorHandler);

// catch 404 and forward to error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// start server
server.listen(PORT, () => {
  console.log("Server start on: ", PORT, "\nDocument: /docs");
});

process.on("unhandledRejection", (err: Error) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message, err);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
