const {Router} = require("express");
const bookRouter = Router();

bookRouter.get("/",(req,res) => {
    res.send("all books")
})
bookRouter.get('/:bookId', (req,res) => {
    const {bookId} = req.params;
    res.send(`the current book id is ${bookId}`);
    
})

module.exports = bookRouter;