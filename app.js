const express = require("express"),
  app = express(),
  firebase = require("firebase"),
  bodyParser = require("body-parser");

//APP CONFIG
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.json({ limit: "1mb" }));

//------------------ROUTES-------------------------------
app.get("/", function (req, res) {
  res.sendFile("newIndex.html", { root: __dirname + "/views" });
});

app.get("/save_meal_plan_template", function (req, res) {
  res.sendFile("mealPlan.html", { root: __dirname + "/views" });
});

app.post("/save_meal_plan_template", function (req, res) {
  console.log("This route works");
  console.log(req.body);
  res.redirect("/save_meal_plan_template");
});

app.listen(process.env.PORT || 2000, function () {
  console.log("app started");
});
