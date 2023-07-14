import pino, { transport } from "pino";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      ignore: 'pid,hostname,time'
    },
  },
});

export default logger;
