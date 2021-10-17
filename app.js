const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Use to parse instead of body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  res.send("<form action='/product' method='POST'><input type='text' name='title' placeholder='title'></input><button type='submit'>Add Product</button></form>");
});

app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello world from Express!</h1>");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("You are now live on port 3000!");
});
