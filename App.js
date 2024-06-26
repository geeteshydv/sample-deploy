const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 1234;
const obj = {
  hello: "world",
};

app.get("/insta", (req, res) => {
  res.send("geeteshydv");
});
app.get("/fb", (req, res) => {
  res.send("Geetesh Yadav");
});

app.get("/twitter", (req, res) => {
  res.send("GeeteshYadav20");
});

app.get("/bgmi", (req, res) => {
  res.send("StarboyGeetesh");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
