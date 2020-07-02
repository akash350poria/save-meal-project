$(document).ready(function () {
  $("#btnsavetemplate").click((e) => {
    e.preventDefault();
    //console.log(document.getElementById("option1prebreakfastitem1Day1").value);

    const ailments = document.getElementById("ailments").value;
    const bmirange = document.getElementById("bmirange").value;
    const mealpreference = document.getElementById("mealpreference").value;
    const cuisine = document.getElementById("cuisine").value;
    const agerange = document.getElementById("agerange").value;
    const sex = document.getElementById("sex").value;

    let todayDate = new Date();
    let dd = String(todayDate.getDate()).padStart(2, "0");
    let mm = String(todayDate.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = todayDate.getFullYear();
    todayDate = mm + "/" + dd + "/" + yyyy;

    let tableCounter = 1;
    let meal_plan = [];

    generateMealObject = (meal, optionNum, tableDayNum) => {
      let itemAndQuantity = {
        item: "",
        quantity: "",
      };
      let itemQuantityArray = [];
      for (let i = 1; i < 6; i++) {
        itemAndQuantity["item"] = document.getElementById(
          "option" + optionNum + meal + "item" + i + "Day" + tableDayNum
        ).value;
        itemAndQuantity["quantity"] = document.getElementById(
          "option" + optionNum + meal + "quantity" + i + "Day" + tableDayNum
        ).value;
        itemQuantityArray.push(itemAndQuantity);
        itemAndQuantity = {
          item: "",
          quantity: "",
        };
      }
      return itemQuantityArray;
    };

    generateMealOption = (tableDayNum) => {
      let optionNum = 1;
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
      while (
        document.getElementById("option" + optionNum + "Day" + tableDayNum)
      ) {
        let arr = [];
        meals.forEach((meal) => {
          arr = generateMealObject(meal, optionNum, tableDayNum);
          dayMealPlan[meal][optionNum] = arr;
        });
        optionNum++;
      }
      return dayMealPlan;
    };

    while (document.getElementById("mealPlanDay" + tableCounter)) {
      let tableOptionCounter = 1;
      let eachDayPlan = generateMealOption(tableCounter);
      meal_plan.push(eachDayPlan);
      tableCounter++;
    }

    const mealPlanApi = {
      ailments: ailments,
      bmirange: bmirange,
      mealpreference: mealpreference,
      cuisine: cuisine,
      agerange: agerange,
      sex: sex,
      date: todayDate,
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
