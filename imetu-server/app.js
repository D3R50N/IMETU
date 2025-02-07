const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const api_routes = require("./routes/api");
const config = require("./config/config");
const logger = require("./utils/logger");
const errorHandler = require("./middlewares/errorHandler");
const ROUTES = require("./routes/routes");
const cors = require('cors');
const path = require("path");
const list = require('./utils/routes_list');

const app = express();

// Static Files
const buildDir = "../imetu/dist/";
app.use(express.static(path.join(__dirname, buildDir)));

app.use(cors());
app.use(cookieParser(config.jwtSecret));
app.use(bodyParser.json({ limit: config.parserJsonLimit }));
app.use(bodyParser.urlencoded({ extended: true, limit: config.parserLimit }));


app.use(ROUTES.API.INDEX, api_routes);

// Error Handling Middleware
app.use(errorHandler.e404);
app.use(errorHandler.e500);


app.listen(config.port, () => {
  if (config.setupDb && config.dbUri) require("./config/db");
  const address=config.isDev?"http://localhost:":"port ";
  logger.info(`Server is running on ${address}${config.port}`);
});

module.exports = app;
