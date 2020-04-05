import { Config } from "../types";

const config: Config = {
  port: parseInt(process.env.PORT) || 7000,
};

export default config;
