import { HydratedDocument, Model } from "mongoose";
import { SoftDeleteModel } from "mongoose-delete";
import { APIFeatures } from "../Utils/Utils.APIFeatures";
import {
  mongoEpressions,
  mongooseToJSON,
  mongooseToObject,
  multipleMongooseToJSON,
  multipleMongooseToObject,
  objectId,
} from "../Utils/Utils.MongoFeatures";

export class BCRUD<T> {
  public model: any;

  constructor(model: any) {
    this.model = model;
  }

  // Test
  public async getTestByID(id: number): Promise<any> {
    return {
      ID: id,
      Name: "TRAN PHUOC TIN",
      From: "VietNam",
      Age: 22,
    };
  }

  public async getOne(id: string): Promise<T> {
    const doc = await this.model.findOne({ _id: id });
    return doc;
  }

  public async getMany(query: any): Promise<T[]> {
    const features = new APIFeatures(this.model, query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const doc = await features.query;
    // sendSuccess(this.res, data);
    return doc;
  }

  public async getDeleted(query: any): Promise<T[]> {
    const doc = await this.model.findDeleted({ query });
    // sendSuccess(this.res, data);
    return doc;
  }

  public async getAllNDeleted(query: any): Promise<T[]> {
    const doc = await this.model.findWithDeleted({ query });
    // sendSuccess(this.res, data);
    return doc;
  }

  public async createOne(body: T): Promise<T> {
    const doc = await this.model.create(body);
    // if (!doc) sendError(this.res, "Can't Create");
    // else sendSuccess(this.res, doc, "Create Successful");
    return doc;
  }

  public async updateOne(id: string, body: T): Promise<T> {
    body = mongoEpressions(body);
    const options = { new: true, runValidators: true };
    const doc = await this.model.findOneAndUpdate({ _id: id }, body, options);
    // if (!doc) sendError(this.res, "Can't Update");
    // else sendSuccess(this.res, doc, "Update Successful");
    return doc;
  }

  public async moveToTrash(id: string): Promise<any> {
    const doc = await (<SoftDeleteModel<any>>this.model).deleteById(id);
    // if (!doc) sendError(this.res, "Can't Delete");
    // else sendSuccess(this.res, doc, "Delete Successful");
    return doc;
  }

  public async deleteOne(id: string): Promise<T> {
    const doc = await this.model.findOneAndDelete({ _id: id });
    // if (!doc) sendError(this.res, "Can't Soft Delete");
    // else sendSuccess(this.res, doc, "Soft Delete Successful");
    return doc;
  }

  public async restoreOne(id: string): Promise<any> {
    const doc = await (<SoftDeleteModel<any>>this.model).restore({
      _id: id,
    });
    // if (!doc) sendError(this.res, "Can't Restore");
    // else sendSuccess(this.res, doc, "Restore Successful");
    return doc;
  }
}
