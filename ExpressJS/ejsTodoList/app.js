const express = require("express");
const bodyParser = require("body-parser");
let items = ["haiii"];
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  let today = new Date();
  //   let currentDay = today.getDay();
  //   let day = "";
  //   if (currentDay === 6 || currentDay === 0) {
  //     day = "Weekend";
  //   } else {
  //     day = "Weekday";
  //   }

  // }
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItem: items });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  console.log(item);
  items.push(item);
  res.redirect("/");
});

app.listen(3000, (server) => {
  console.log("server started on port 3000");
});
