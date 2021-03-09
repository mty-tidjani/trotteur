export type MarketItemType = {
  _id: string;
  title: string;
  price: number;
  image?: string;
  url?: string
};

export type User = {
  _id: string;
  usrNM: string;
};