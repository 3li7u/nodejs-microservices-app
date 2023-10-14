const { PORT } = require("./src/conf");
const app = require("./src/app");

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
