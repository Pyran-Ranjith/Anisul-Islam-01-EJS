const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3001;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

let plNames = ["c", "c++", "java", "python"];

app.get("/", (req, res) => {
  // const pLangauge = req.body.pLangauge;
  // pLanguages.push(pLangauge);
  // res.redirect("/");
  res.status(200).render("index", { pageTitle: "home page", plNames: plNames });
});

app.post("/", (req, res) => {
  plNames.push(req.body.plName);
  res.redirect("/");
});

app.get("/contact", (req, res) => {
  res.status(200).render("contact", { pageTitle: "contact page" });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
