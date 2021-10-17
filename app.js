const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("Using express middleware");
  res.send("<h1>The Add Product Page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Using express middleware");
  res.send("<h1>Hello world from Express!</h1>");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("You are now live on port 3000!");
});
