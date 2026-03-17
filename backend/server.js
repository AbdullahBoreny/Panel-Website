const app = require("./app");
const PORT = 5000;

// Listen on 0.0.0.0 so other containers can reach this one
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});