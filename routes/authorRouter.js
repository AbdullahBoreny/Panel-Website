const {Router} = require("express");
const authRouter = Router();

authRouter.get("/",(req,res) => {
    res.send("all Authors")
})
authRouter.get('/:authorId',(req,res) => {
    const {authorId} = req.params;
    res.send(`the current author id is ${authorId}`);
})
module.exports = authRouter;