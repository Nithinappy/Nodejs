const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "pug");
app.set("views", "views");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminData.router);
app.use(shopRoutes);

app.use((req, res) => {
  // res.sendFile(path.join(__dirname, "views", "error.html"));
  res.render("error", { docTitle: "PageNotFound" });
});
app.listen(3000);
