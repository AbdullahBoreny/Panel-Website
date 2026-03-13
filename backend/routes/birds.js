const CustomNotFoundError = require("../errors/CustomNotFoundError");


const express = require("express");
const router = express.Router();

const timeLog = (req, res, next) => {
  const curDate = new Date().toTimeString();
  console.log("Time: " + curDate);
  next();

};
const logger = (req, res, next) => {
  console.log("LOGGED IN");
next();
};

router.use(timeLog);
router.use(logger);
router.get("/", (req, res) => {
   console.log("Query:", req.params.birdId);
  if(req.params.birdId == 1) {
  throw new CustomNotFoundError("oh no");
  }
  res.send("birds homepage");
 
});

router.get("/about", (req, res) => {
  res.send("About birds");
});
router.use((err, req, res) => {
  console.error(err.name);
  res.status(err.statusCode).send(err.message)
});
module.exports = router;
