import {
  model,
  Schema,
  ObtainDocumentType,
  IndexDefinition,
  IndexOptions,
  SchemaOptions,
  SchemaDefinition,
  Model,
} from "mongoose";
import softDel, { SoftDeleteModel } from "mongoose-delete";
import { mongoSequence } from "../Plugins/Mongo/Plugins.Mongo.Sequence";
export class BMODEL<T> {
  private name: string;
  private collection: string | undefined;
  private schema: any;

  constructor(name: string, collection: string) {
    this.name = name;
    this.collection = collection;
  }

  setup(
    definition: ObtainDocumentType<T> | SchemaDefinition,
    options: SchemaOptions
  ) {
    (<Schema>this.schema) = new Schema<T>(
      {
        _id: { type: Number },
        ...definition,
      },
      {
        _id: false,
        versionKey: false,
        timestamps: true,
        ...options,
      }
    );

    // Start Add Plugins
    (<Schema>this.schema).plugin(mongoSequence, {
      id: `${this.collection}_counter_id`,
    });

    (<Schema>this.schema).plugin(softDel, {
      overrideMethods: "all",
      deletedAt: true,
    });

    // End Add Plugins

    return this;
  }

  setIndex(fields: IndexDefinition, options: IndexOptions) {
    (<Schema>this.schema).index(fields, options);
    return this;
  }

  // Start set middleware
  setMiddleware(middleware: (schema: Schema) => void) {
    middleware(this.schema);
    return this;
  }

  instance(): Model<T> | SoftDeleteModel<any> {
    return model<T>(this.name, this.schema, this.collection);
  }
}
