import * as path from "path";
import { Express, Application } from "express";
import engine from "ejs";
import LRU from "lru-cache";
import expressLayouts from "express-ejs-layouts";

export const setViews = (app: Application, dirname: string) => {
  engine.cache = new LRU({ max: 500, maxSize: 5000 });
  app.set("views", path.join(dirname, "Views"));
  app.set("view engine", "ejs");
  app.use(expressLayouts);
  app.set("layout", "Layouts/layout");
};

export const setPublic = (app: Application, express: any, dirname: string) => {
  app.use(express.static(path.join(dirname, "Public")));
  app.use(express.static(path.join(dirname, "Public/Assets/Images")));
};
