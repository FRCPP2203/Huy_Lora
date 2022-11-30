export const CONFIGS = {
  NODE_ENV: "development",
  SERVER: {
    PORT: 8888,
  },
  DB: {
    MONGODB: {
      NAME: "AAAA",
      LOCAL: "mongodb://localhost:27017/",
      CLOUD:
        "mongodb+srv://<username>:<password>@<host>/<DBname>?retryWrites=true&w=majority",
    },
    MYSQL: {
      NAME: "BBBB",
      HOST: "localhost",
      USERNAME: "tptindev",
      PASSWORD: "123456789",
    },
  },
  EMAIL: {
    MAIL_USERNAME: "pbnghia.18ce@vku.udn.vn",
    EMAIL_PASSWORD: "google@daophim!",
    EMAIL_HOST: "smtp.mailtrap.io",
    EMAIL_PORT: 2525,
    EMAIL_FROM: "tptin.18it2@vku.udn.vn",
    SENDGRID_USERNAME: "apikey",
    SENDGRID_PASSWORD:
      "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",
  },
};
