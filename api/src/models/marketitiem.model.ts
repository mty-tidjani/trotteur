import { Schema, model, Document, Types } from "mongoose";
import { MODEL } from "../_constant";

export interface IMarketItem extends Document {
  scd: string; // Staus code to indicate if entry is deleted
  title: string;
  price: number;
  image: string;
  url: string;
  user: any;
}

const marketSchema: Schema<IMarketItem> = new Schema(
  {
    scd: { type: String },
    title: { type: String },
    price: { type: Number },
    image: { type: String },
    url: { type: String },
    user: { type: Types.ObjectId, ref: MODEL.USER },
  },
  {
    versionKey: false,
    collection: MODEL.MARKET_ITEM,
  }
);

// Export user
export const MarketItem = model<IMarketItem>(MODEL.MARKET_ITEM, marketSchema);
