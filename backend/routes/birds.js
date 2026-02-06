const express = require("express");
const router = express.Router();


const timeLog = (req,res,next) =>{
    console.log("time: "+Date.now());
    next();
}
const logger = (req,res,next) =>{
    console.log('LOGGED IN');
    next();
}
router.use(timeLog);
router.use(logger)

router.get('/',(req,res) => {
    res.send('birds homepage');
})
router.get('/about', (req, res) => {
  res.send('About birds')
})
module.exports = router;