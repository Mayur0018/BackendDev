const express = require("express");
const app = express();
const port = 4000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twiter", (req, res) => {
  res.send("im Btter Then ALL");
});

app.get("/mayur", (req, res) => {
  console.log("the man tha legend The Myth Mayur Nishad");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
