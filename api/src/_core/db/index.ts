import { connect } from "mongoose";
import config from "../config";

const dbConnect = (): Promise<unknown> => {
  const { url: MONGO_URL } = config.mongo;

  return new Promise((res, rej) => {
    connect(MONGO_URL, {
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.info("Database pluged in");
        res(undefined);
      })
      .catch((err) => {
        console.error("Database not in!", MONGO_URL);
        rej(err);
      });
  });
};

export default dbConnect;
