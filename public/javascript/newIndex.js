const saveTemplateButton = document.getElementById("saveTemplate");
const addDayButton = document.getElementById("addDay");
const formDiv = document.getElementById("formDiv");
let dayCounter = 1;

addDayFunc = () => {
  //formDiv.innerHTML = tableHeader;
  let tableHeader =
    "<h4>DAY " +
    dayCounter +
    "</h4><form><table class='table table-bordered table-striped'><tr><th id='preBreakfast'>Pre breakfast</th><th>Pre breakfast</th><th>Pre breakfast</th><th>Pre breakfast</th><th>Pre breakfast</th><th>Pre breakfast</th><th>Pre breakfast</th><th>Pre breakfast</th><th>Pre breakfast</th></tr></table></form><button id='addMeal' class='btn btn-danger'>Add Meal Option</button>";
  let div = document.createElement("div");
  div.innerHTML = tableHeader;
  formDiv.appendChild(div);
  dayCounter++;
};

addMealOptionFunc = () => {
  let optionHeader =
    "<tr><th><input type='text' class='form-control' placeholder='ITEM'></th><th><input type='text' class='form-control' placeholder='QUANTITY'></th></tr><tr><th><input type='text' class='form-control'></th><th><input type='text' class='form-control'></th></tr><tr><th><input type='text' class='form-control'></th><th><input type='text' class='form-control'></th></tr><tr><th><input type='text' class='form-control'></th><th><input type='text' class='form-control'></th></tr><tr><th><input type='text' class='form-control'></th><th><input type='text' class='form-control'></th></tr>";
  let subTable = document.createElement("table");
  subTable.innerHTML = optionHeader;
  document.getElementById("preBreakfast").appendChild(subTable);
};

document.addEventListener("DOMContentLoaded", function (event) {
  saveTemplateButton.addEventListener("click", function () {
    $("#SaveAsTemplatePopUp").modal("show");
  });
});
// jQuery(document).ready(function ($) {
//   $("#saveTemplate").click(function () {
//     $("#SaveAsTemplatePopUp").modal("show");
//   });
// });

addDayButton.addEventListener("click", addDayFunc);

document.addEventListener("click", (e) => {
  if (e.target && e.target.id == "addMeal") {
    //add function to add new subtable inside each meal
    addMealOptionFunc();
  }
});
