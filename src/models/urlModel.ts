import mongoose, { Document, Schema } from "mongoose";

interface IUrl extends Document {
  fullUrl: string;
  shortUrl: string;
}

const urlSchema = new Schema({
  fullUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
});

const Url = mongoose.model<IUrl>("URL", urlSchema);

export default Url;
