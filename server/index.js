const express = require("express");
var cors = require("cors");

const logger = require("./logger");

let corsOptions = {
  origin: "https://devapp-api.c-paas.com", // Compliant
};
const app = express();
app.disable("x-powered-by");
// enable cors for now
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.post("/logger", (req, res, next) => {
  let logdata = req.body;
  logger.info(logdata);
  res.status(200).send({ msg: "logging successful" });
});

app.get("/", (req, res, next) => {
  res.status(200).send("Logger initialised");
});

app.listen(7000, () => {
  console.log("listening on port 7000");
});
