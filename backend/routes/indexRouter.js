const {Router} = require("express");
const path = require('path')
const indexRouter = Router();
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 100 requests per window
  message: {
    error: "Too many requests, please try again later."
  },
  standardHeaders: true, // RateLimit-* headers
  legacyHeaders: false,
});
indexRouter.use(limiter);

indexRouter.get("/",(req,res) => {
    res.sendFile(path.join(process.cwd(), './public/index.html'))
})
indexRouter.get('/about',(req,res) => {
    res.send("about");
})
indexRouter.post("/form", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);

  res.json({
    message: "Form submitted successfully!",
    received: data,
   
  });
});
module.exports = indexRouter;
