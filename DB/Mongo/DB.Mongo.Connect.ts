import mongoose from "mongoose";
import assert from "assert";
import { CONFIGS } from "../../Config/Config.App";

const uri = CONFIGS.DB.MONGODB.LOCAL + CONFIGS.DB.MONGODB.NAME;
mongoose.connect(
  uri,
  {
    // options
  },
  (err) => {
    assert.equal(null, err);
    console.log("MongoDB connected!!!");
  }
);
