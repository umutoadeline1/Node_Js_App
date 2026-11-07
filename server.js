const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send("Hello from Node.js application! Deployed on Render");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`App is listening on port ${port}`);
});
