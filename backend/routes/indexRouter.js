const { Router } = require("express");
const indexRouter = Router();

// POST form submission
indexRouter.post("/form", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ status: "fail", message: "Name and email required" });
  }

  // Simulate saving data...
  res.status(201).json({
    status: "success",
    message: "Form submitted successfully!",
    received: { name, email }
  });
});

module.exports = indexRouter;
