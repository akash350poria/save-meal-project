const saveTemplateButton = document.getElementById("saveTemplate");
const addDayButton = document.getElementById("addDay");
const formDiv = document.getElementById("formDiv");
let dayCounter = 1;

addDayFunc = () => {
  let tableHeader =
    "<h4>DAY " +
    dayCounter +
    "</h4><form><table id='mealPlanDay" +
    dayCounter +
    "' class='table table-bordered table-striped'><tr><th style='padding-right: 100px;'>Pre breakfast</th><th style='padding-right: 100px;'>Breakfast</th><th style='padding-right: 100px;'>Pre lunch</th><th style='padding-right: 100px;'>Lunch</th><th style='padding-right: 100px;'>Evening snack</th><th style='padding-right: 100px;'>Dinner</th><th style='padding-right: 100px;'>Post dinner</th><th style='padding-right: 100px;'>Pre workout</th><th style='padding-right: 100px;'>Post workout</th></tr></table></form><button id='addMealDay" +
    dayCounter +
    "'class='btn btn-danger'>Add Meal Option</button>";
  let div = document.createElement("div");
  div.innerHTML = tableHeader;
  formDiv.appendChild(div);
  dayCounter++;
};

addMealOptionFunc = (dayNumber) => {
  let optionCounter = 1;
  let meals = [
    "prebreakfast",
    "breakfast",
    "prelunch",
    "lunch",
    "eveningsnack",
    "dinner",
    "postdinner",
    "preworkout",
    "postworkout",
  ];
  meals.forEach((meal) => {
    let optionContent =
      "<tr><thead>ITEM</thead><thead>QUANTITY</thead></tr><tr id='option1'" +
      dayNumber +
      "><td><input id='" +
      meal +
      "item1" +
      dayNumber +
      "' type='text' class='form-control' placeholder='Item 1'></td><td><input id='" +
      meal +
      "quantity1" +
      dayNumber +
      "' type='text' class='form-control' placeholder='Quantity 1'></td></tr><tr id='option2'" +
      dayNumber +
      "><td><input id='" +
      meal +
      "item2" +
      dayNumber +
      "' type='text' class='form-control' placeholder='Item 2'></td><td><input id='" +
      meal +
      "quantity2" +
      dayNumber +
      "' type='text' class='form-control' placeholder='Quantity 2'></td></tr><tr id='option3'" +
      dayNumber +
      "><td><input id='" +
      meal +
      "item3" +
      dayNumber +
      "' type='text' class='form-control' placeholder='Item 3'></td><td><input id='" +
      meal +
      "quantity3" +
      dayNumber +
      "' type='text' class='form-control' placeholder='Quantity 3'></td></tr><tr id='option4'" +
      dayNumber +
      "><td><input id='" +
      meal +
      "item4" +
      dayNumber +
      "' type='text' class='form-control' placeholder='Item 4'></td><td><input id='" +
      meal +
      "quantity4" +
      dayNumber +
      "' type='text' class='form-control' placeholder='Quantity 4'></td></tr><tr id='option5'" +
      dayNumber +
      "><td><input id='" +
      meal +
      "item5" +
      dayNumber +
      "' type='text' class='form-control' placeholder='Item 5'></td><td><input id='" +
      meal +
      "quantity5" +
      dayNumber +
      "' type='text' class='form-control' placeholder='Quantity 5'></td></tr>";
    $("#mealPlan" + dayNumber).append(optionContent);
  });
};

document.addEventListener("DOMContentLoaded", function (event) {
  saveTemplateButton.addEventListener("click", function () {
    $("#SaveAsTemplatePopUp").modal("show");
  });
});

addDayButton.addEventListener("click", addDayFunc);

document.addEventListener("click", (event) => {
  if (event.target && event.target.id.includes("addMealDay")) {
    let dayNum = "Day" + event.target.id.slice(-1);
    console.log(dayNum);
    addMealOptionFunc(dayNum);
  }
});
