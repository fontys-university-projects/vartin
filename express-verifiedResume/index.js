const express = require('express')
require('@prisma/client')
const cors = require("cors")
const app = express()
const bodyParser = require('body-parser')
const helmet = require('helmet')
const multer = require('multer')
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")


var corsOptions = {
    origin: [process.env.ORIGIN]
  }

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Verified Resume API",
      version: "0.1.0",
      description:
        "Please note not all endpoints are available, since the api is in early development.",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

const route = require('./routes')
app.use('/', route)

app.disable('x-powered-by')
const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  console.log('You are missing "DATABASE_URL" inside the .env file \n')
  console.log('Example: DATABASE_URL="mongodb+srv://user:pass@domain:27017/database" \n')
  console.log('For more information, check out /doc/INITIALIZATION.md ')
}

const port = process.env.PORT || 5000
let server;
(async () => {
  server = app.listen(port, () => {
    console.log(`application is listening on port ${port}`);
  });
})().catch((err) => {
  if (server && server.listening) server.close();
  console.error(err);
  process.exitCode = 1;
});
