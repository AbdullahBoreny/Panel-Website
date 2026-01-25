const {Router} = require("express");
const path = require('path')
const indexRouter = Router();

indexRouter.get("/",(req,res) => {
    res.sendFile(path.join(process.cwd(), './public/index.html'))
})
indexRouter.get('/about',(req,res) => {
    res.send("about");
})
indexRouter.post('/form', (req,res) => {
    const data = req.body;
    console.log("Recived data: " , data);
    res.json(data)

    res.end();
})
module.exports = indexRouter;