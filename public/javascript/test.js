$(document).ready(function () {
  $("#btnsavetemplate").click((e) => {
    e.preventDefault();

    let meal_plan = [];
    let dayMealPlan = {
      prebreakfast: [],
      breakfast: [],
      prelunch: [],
      lunch: [],
      eveningsnack: [],
      dinner: [],
      postdinner: [],
      preworkout: [],
      postworkout: [],
    };

    let tableCounter = 1;
    while (document.getElementById("mealplantable" + tableCounter)) {
      let table = document.getElementById("mealplantable" + tableCounter);
      let tableRow = table.rows.length;
      for (let i = 1; i < tableRow; i++) {
        dayMealPlan.prebreakfast.push(
          document.getElementById("day" + tableCounter + "prebreakfast" + i)
            .value
        );
        dayMealPlan.breakfast.push(
          document.getElementById("day" + tableCounter + "breakfast" + i).value
        );
        dayMealPlan.prelunch.push(
          document.getElementById("day" + tableCounter + "prelunch" + i).value
        );
        dayMealPlan.lunch.push(
          document.getElementById("day" + tableCounter + "lunch" + i).value
        );
        dayMealPlan.eveningsnack.push(
          document.getElementById("day" + tableCounter + "eveningsnack" + i)
            .value
        );
        dayMealPlan.dinner.push(
          document.getElementById("day" + tableCounter + "dinner" + i).value
        );
        dayMealPlan.postdinner.push(
          document.getElementById("day" + tableCounter + "postdinner" + i).value
        );
        dayMealPlan.preworkout.push(
          document.getElementById("day" + tableCounter + "preworkout" + i).value
        );
        dayMealPlan.postworkout.push(
          document.getElementById("day" + tableCounter + "postworkout" + i)
            .value
        );
        meal_plan.push(dayMealPlan);
      }
      dayMealPlan = {
        prebreakfast: [],
        breakfast: [],
        prelunch: [],
        lunch: [],
        eveningsnack: [],
        dinner: [],
        postdinner: [],
        preworkout: [],
        postworkout: [],
      };
      tableCounter++;
    }

    let ailments = document.getElementById("ailments").value;
    let bmirange = document.getElementById("bmirange").value;
    let mealpreference = document.getElementById("mealpreference").value;
    let cuisine = document.getElementById("cuisine").value;
    let agerange = document.getElementById("agerange").value;
    let sex = document.getElementById("sex").value;

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

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(mealPlanApi),
    };

    fetch("/save_meal_plan_template", options)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
