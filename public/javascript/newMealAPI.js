const saveButton = document.getElementById("btnsavetemplate");

document.addEventListener("DOMContentLoaded", function (event) {
  saveButton.addEventListener("click", function () {
    const ailments = document.getElementById("ailments").value;
    const bmirange = document.getElementById("bmirange").value;
    const mealpreference = document.getElementById("mealpreference").value;
    const cuisine = document.getElementById("cuisine").value;
    const agerange = document.getElementById("agerange").value;
    const sex = document.getElementById("sex").value;

    let tableCounter = 1;
    let meal_plan = [];

    generateMealObject = (meal, optionNum, tableDayNum) => {
      let itemAndQuantity = {
        item: "",
        qunatity: "",
      };
      let itemQuantityArray = [];
      for (let i = 1; i < 6; i++) {
        if (
          !document.getElementById(
            "option" + optionNum + meal + "item" + i + "Day" + tableDayNum
          ).value == "" &&
          !document.getElementById(
            "option" + optionNum + meal + "quantity" + i + "Day" + tableDayNum
          ).value == ""
        ) {
          itemAndQuantity[item] = !document.getElementById(
            "option" + optionNum + meal + "item" + i + "Day" + tableDayNum
          ).value;
          itemAndQuantity[qunatity] = !document.getElementById(
            "option" + optionNum + meal + "quantity" + i + "Day" + tableDayNum
          ).value;
          itemQuantityArray.push(itemAndQuantity);
          itemAndQuantity = {
            item: "",
            qunatity: "",
          };
        }
      }
      return itemQuantityArray;
    };

    generateMealOption = (optionNum, tableDayNum) => {
      let dayMealPlan = {
        prebreakfast: {},
        breakfast: {},
        prelunch: {},
        lunch: {},
        eveningsnack: {},
        dinner: {},
        postdinner: {},
        preworkout: {},
        postworkout: {},
      };
      let arr = [];
      meals.forEach((meal) => {
        arr = generateMealObject(meal, optionNum, tableDayNum);
        dayMealPlan[meal][optionNum] = arr;
      });
      return dayMealPlan;
    };

    while (document.getElementById("mealPlanDay" + tableCounter)) {
      let tableOptionCounter = 1;
      while (
        document.getElementById(
          "option" + tableOptionCounter + "Day" + tableCounter
        )
      ) {
        let eachDayPlan = generateMealOption(
          "option" + tableOptionCounter,
          "Day" + tableCounter
        );
        meal_plan.push(eachDayPlan);
        tableOptionCounter++;
      }
      tableCounter++;
    }

    const mealPlanApi = {
      ailments: ailments,
      bmirange: bmirange,
      mealpreference: mealpreference,
      cuisine: cuisine,
      agerange: agerange,
      sex: sex,
      meal_plan: meal_plan,
    };
    console.log(mealPlanApi);

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(mealPlanApi),
    };

    fetch("/save_meal_plan_template", fetchOptions)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
