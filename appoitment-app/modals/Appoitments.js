import {model, models, Schema} from "mongoose";

const   ApoitmentSchema = new Schema({
  name: {type:String, required:true},
}, {timestamps: true});

export const Category = models?.Category || model('Category', CategorySchema);