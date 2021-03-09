import { Schema, model, Document } from "mongoose";
import { MODEL } from "../_constant";

export interface IMarketItem extends Document {
  title: string;
  price: number;
  image: string;
  url: string;
}

const marketSchema: Schema<IMarketItem> = new Schema(
  {
    title: { type: String },
    price: { type: Number },
    image: { type: String },
    url: { type: String },
  },
  {
    versionKey: false,
    collection: MODEL.MARKET_ITEM,
  }
);

// Export user
export const MarketItem = model<IMarketItem>(MODEL.MARKET_ITEM, marketSchema);
