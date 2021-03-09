// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const { env } = process;

const config = {
  mongo: {
    url: env.MONGO_URL || "",
  },
  appPort: env.SERVER_PORT,
  jwt: process.env.JWT_SECRET || "",
};

export default config;
