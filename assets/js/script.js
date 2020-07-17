// Global Variables
var mealCategoryArray = [];
var mealCategoryChoice = "";
var mealAreaArray = [];
var mealAreaChoice = "";
var mealIngredientArray = [];
var mealIngredientChoice = "";

var drinkCategoryArray = [];
var drinkCategoryChoice = "";
var drinkAlcoholArray = [];
var drinkAlcoholChoice = "";
var drinkIngredientArray = [];
var drinkIngredientChoice = "";

var mealMatches = [];
var drinkMatches = [];

var mealCollection = {
}
var drinkCollection = {
}

// Grabbing the array for Meal Category
function chooseMealCategory(callback) {
    mealCategoryChoice = $("#meal-category-choice").val();
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + mealCategoryChoice;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response.meals);
        var mealCategory = response.meals;

        for (var i = 0; i < mealCategory.length; i++) {
            // console.log(mealCategory[i]);
            mealCategoryArray.push(mealCategory[i].idMeal);
            // console.log(mealCategory[i]);
            if (mealCollection.hasOwnProperty("id" + mealCategory[i].idMeal) === false) {
                // no id yet
                mealCollection["id" + mealCategory[i].idMeal] = {
                    id: mealCategory[i].idMeal
                }
            }
            // any meal should exist at this point
            // add meal data from API
            mealCollection["id" + mealCategory[i].idMeal].mealCategoryApi = mealCategory[i];
        }

        console.log(mealCollection);

        callback();
    });
}

// Grabbing the array for Meal Area
function chooseMealArea(callback) {
    mealAreaChoice = $("#meal-area-choice").val();
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + mealAreaChoice;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response.meals);
        var mealArea = response.meals;

        for (var i = 0; i < mealArea.length; i++) {
            // console.log(mealArea[i]);
            mealAreaArray.push(mealArea[i].idMeal);
            if (mealCollection.hasOwnProperty("id" + mealArea[i].idMeal) === false) {
                // no id yet
                mealCollection["id" + mealArea[i].idMeal] = {
                    id: mealArea[i].idMeal
                }
            }
            // any meal should exist at this point
            // add meal data from API
            mealCollection["id" + mealArea[i].idMeal].mealAreaApi = mealArea[i];
        }

        console.log(mealCollection);
        callback();
    });
}

// Grabbing the array for Meal Ingredient
function chooseMealIngredient(callback) {
    mealIngredientChoice = $("#meal-ingredient-choice").val();
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + mealIngredientChoice;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response.meals);
        var mealIngredient = response.meals;

        for (var i = 0; i < mealIngredient.length; i++) {
            // console.log(mealIngredient[i]);
            mealIngredientArray.push(mealIngredient[i].idMeal);
            if (mealCollection.hasOwnProperty("id" + mealIngredient[i].idMeal) === false) {
                // no id yet
                mealCollection["id" + mealIngredient[i].idMeal] = {
                    id: mealIngredient[i].idMeal
                }
            }
            // any meal should exist at this point
            // add meal data from API
            mealCollection["id" + mealIngredient[i].idMeal].mealIngredientApi = mealIngredient[i];
        }

        console.log(mealCollection);
        callback();
    });
}

// Grabbing the array for Drink Category
function chooseDrinkCategory(callback) {
    drinkCategoryChoice = $("#drink-category-choice").val();
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + drinkCategoryChoice;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response.drinks);
        var drinkCategory = response.drinks;

        for (var i = 0; i < drinkCategory.length; i++) {
            // console.log(drinkCategory[i]);
            drinkCategoryArray.push(drinkCategory[i].idDrink);
            if (drinkCollection.hasOwnProperty("id" + drinkCategory[i].idDrink) === false) {
                drinkCollection["id" + drinkCategory[i].idDrink] = {
                    id: drinkCategory[i].idDrink
                }
            }
            drinkCollection["id" + drinkCategory[i].idDrink].drinkCategoryApi = drinkCategory[i];
        }

        // console.log(drinkCategoryArray);
        console.log(drinkCollection);
        callback();
    });
}

// Grabbing the array for Drink Alcohol
function chooseDrinkAlcohol(callback) {
    drinkAlcoholChoice = $("#drink-alcohol-choice").val();
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + drinkAlcoholChoice;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response.drinks);
        var drinkAlcohol = response.drinks;

        for (var i = 0; i < drinkAlcohol.length; i++) {
            // console.log(drinkAlcohol[i]);
            drinkAlcoholArray.push(drinkAlcohol[i].idDrink);
            if (drinkCollection.hasOwnProperty("id" + drinkAlcohol[i].idDrink) === false) {
                drinkCollection["id" + drinkAlcohol[i].idDrink] = {
                    id: drinkAlcohol[i].idDrink
                }
            }
            drinkCollection["id" + drinkAlcohol[i].idDrink].drinkAlcoholApi = drinkAlcohol[i];
        }

        // console.log(drinkAlcoholArray);
        console.log(drinkCollection);
        callback();
    });
}

// Grabbing the array for Drink Ingredient
function chooseDrinkIngredient(callback) {
    drinkIngredientChoice = $("#drink-ingredient-choice").val();
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkIngredientChoice;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response.drinks);
        var drinkIngredient = response.drinks;
        if (drinkIngredient.length > 0) {
            for (var i = 0; i < drinkIngredient.length; i++) {
                // console.log(drinkIngredient[i]);
                drinkIngredientArray.push(drinkIngredient[i].idDrink);
                if (drinkCollection.hasOwnProperty("id" + drinkIngredient[i].idDrink) === false) {
                    drinkCollection["id" + drinkIngredient[i].idDrink] = {
                        id: drinkIngredient[i].idDrink
                    }
                }
                drinkCollection["id" + drinkIngredient[i].idDrink].drinkIngredientApi = drinkIngredient[i];
            }
        }


        // console.log(drinkIngredientArray);
        console.log(drinkCollection);
        callback();
    });
}


// Generating the chosen meal
function produceFinalMeal() {
    if (mealMatches = []) {
        $("#meal-match-message").text("We're sorry, we couldn't find a meal matching any of your criteria. Please try again.");
    }
    else {
        var finalMealNumber = mealMatches[Math.floor(Math.random() * mealMatches.length)].id;
        var queryURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + finalMealNumber;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.meals);
            var finalMeal = response.meals;

            for (let i = 0; i < finalMeal.length; i++) {
                var mealName = $("<h2>").text(finalMeal[i].strMeal);
                $("#meal-name").empty();
                $("#meal-name").append(mealName);

                var mealPic = finalMeal[i].strMealThumb;
                $("#meal-pic").attr(
                    "src",
                    mealPic
                );

                $("#meal-category").text("Category: " + finalMeal[i].strCategory);
                $("#meal-area").text("Area: " + finalMeal[i].strArea);
                $("#meal-recipe").text(finalMeal[i].strInstructions);

                var arr = Object.entries(finalMeal[i]);
                var measurements = [];
                var ingredients = [];

                for (var j = 0; j < arr.length; j++) {
                    if (arr[j][0].substr(0, "strIngredient".length) === 'strIngredient') {
                        ingredients.push(arr[j][1])
                    }
                    if (arr[j][0].substr(0, "strMeasure".length) === 'strMeasure') {
                        measurements.push(arr[j][1])
                    }
                }

                for (var k = 0; k < ingredients.length; k++) {
                    if (measurements[k] !== null && measurements[k] !== "" && measurements[k] !== " ") {
                        var ingredientList = $("<li>");
                        ingredientList.text(measurements[k] + " " + ingredients[k]);
                        $("#meal-ingredients").append(ingredientList);
                    }
                }

            }
        });
    }
}


// Generating the chosen drink
function produceFinalDrink() {
    if (drinkMatches = []) {
        $("#drink-match-message").text("We're sorry, we couldn't find a drink matching any of your criteria. Please try again.");
    }
    else {
        var finalDrinkNumber = drinkMatches[Math.floor(Math.random() * drinkMatches.length)].id;
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + finalDrinkNumber;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.drinks);
            var finalDrink = response.drinks;

            for (let l = 0; l < finalDrink.length; l++) {
                var drinkName = $("<h2>").text(finalDrink[l].strDrink);
                $("#drink-name").empty();
                $("#drink-name").append(drinkName);

                var drinkPic = finalDrink[l].strDrinkThumb;
                $("#drink-pic").attr(
                    "src",
                    drinkPic
                );

                $("#drink-category").text("Category: " + finalDrink[l].strCategory);
                $("#drink-alcohol").text("Alcohol Content: " + finalDrink[l].strAlcoholic);
                $("#drink-recipe").text(finalDrink[l].strInstructions);

                var drinkArr = Object.entries(finalDrink[l]);
                var drinkMeasurements = [];
                var drinkIngredients = [];

                for (var m = 0; m < drinkArr.length; m++) {
                    if (drinkArr[m][0].substr(0, "strIngredient".length) === 'strIngredient') {
                        drinkIngredients.push(drinkArr[m][1])
                    }
                    if (drinkArr[m][0].substr(0, "strMeasure".length) === 'strMeasure') {
                        drinkMeasurements.push(drinkArr[m][1])
                    }
                }

                for (var n = 0; n < drinkIngredients.length; n++) {
                    if (drinkMeasurements[n] !== null && drinkMeasurements[n] !== "" && drinkMeasurements[n] !== " ") {
                        var drinkIngredientList = $("<li>");
                        drinkIngredientList.text(drinkMeasurements[n] + " " + drinkIngredients[n]);
                        $("#drink-ingredients").append(drinkIngredientList);
                    }
                }

            }
        });
    }
}

function getMealMatch() {

    var allMeals = Object.entries(mealCollection);
    for (var i = 0; i < allMeals.length; i++) {
        if (mealCollection[allMeals[i][0]].hasOwnProperty("mealCategoryApi")) {
            if (mealCollection[allMeals[i][0]].hasOwnProperty("mealAreaApi")) {
                if (mealCollection[allMeals[i][0]].hasOwnProperty("mealIngredientApi")) {
                    mealMatches.push(allMeals[i][1])
                    $("#meal-match-message").text("Here is a meal based off all three of your criteria");
                }
            }
        }

        else if (mealCollection[allMeals[i][0]].hasOwnProperty("mealCategoryApi")) {
            if (mealCollection[allMeals[i][0]].hasOwnProperty("mealIngredientApi")) {
                mealMatches.push(allMeals[i][1])
                $("#meal-match-message").text("We're sorry, we couldn't find a meal matching all three of your criteria. Here is a meal based off your CATEGORY and INGREDIENT");
            }
        }

        else if (mealCollection[allMeals[i][0]].hasOwnProperty("mealCategoryApi")) {
            if (mealCollection[allMeals[i][0]].hasOwnProperty("mealAreaApi")) {
                mealMatches.push(allMeals[i][1])
                $("#meal-match-message").text("We're sorry, we couldn't find a meal matching all three of your criteria. Here is a meal based off your CATEGORY and AREA");
            }
        }

        else if (mealCollection[allMeals[i][0]].hasOwnProperty("mealAreaApi")) {
            if (mealCollection[allMeals[i][0]].hasOwnProperty("mealIngredientApi")) {
                mealMatches.push(allMeals[i][1])
                $("#meal-match-message").text("We're sorry, we couldn't find a meal matching all three of your criteria. Here is a meal based off your INGREDIENT and AREA");
            }
        }
    }
}


function getDrinkMatch(a, b, c) {

    var allDrinks = Object.entries(drinkCollection);
    for (var i = 0; i < allDrinks.length; i++) {
        if (drinkCollection[allDrinks[i][0]].hasOwnProperty("drinkCategoryApi")) {
            if (drinkCollection[allDrinks[i][0]].hasOwnProperty("drinkAlcoholApi")) {
                if (drinkCollection[allDrinks[i][0]].hasOwnProperty("drinkIngredientApi")) {
                    drinkMatches.push(allDrinks[i][1])
                    $("#drink-match-message").text("Here is a drink based off all three of your criteria");
                }
            }
        }

        else if (drinkCollection[allDrinks[i][0]].hasOwnProperty("drinkCategoryApi")) {
            if (drinkCollection[allDrinks[i][0]].hasOwnProperty("drinkIngredientApi")) {
                drinkMatches.push(allDrinks[i][1])
                $("#drink-match-message").text("We're sorry, we couldn't find a drink matching all three of your criteria. Here is a drink based off your CATEGORY and INGREDIENT");
            }
        }

        else if (drinkCollection[allDrinks[i][0]].hasOwnProperty("drinkCategoryApi")) {
            if (drinkCollection[allDrinks[i][0]].hasOwnProperty("drinkAlcoholApi")) {
                drinkMatches.push(allDrinks[i][1])
                $("#drink-match-message").text("We're sorry, we couldn't find a drink matching all three of your criteria. Here is a drink based off your CATEGORY and ALCOHOL CONTENT");
            }
        }

        else if (drinkCollection[allDrinks[i][0]].hasOwnProperty("drinkAlcoholApi")) {
            if (drinkCollection[allDrinks[i][0]].hasOwnProperty("drinkIngredientApi")) {
                drinkMatches.push(allDrinks[i][1])
                $("#drink-match-message").text("We're sorry, we couldn't find a drink matching all three of your criteria. Here is a drink based off your INGREDIENT and ALCOHOL CONTENT");
            }
        }

        else if (drinkMatches === []) {
            $("#drink-match-message").text("We're sorry, we couldn't find a drink matching any of your criteria. Please try again.");
        }
    }
}



$("#generate-meal").on("click", function (event) {
    event.preventDefault();

    var countAjaxMeal = 0;
    var maxAjaxMeal = 3;
    var amIdoneMeal = function () {
        countAjaxMeal++;
        if (countAjaxMeal >= maxAjaxMeal) {
            getMealMatch();
            produceFinalMeal();
        }
    }

    var countAjaxDrink = 0;
    var maxAjaxDrink = 3;
    var amIdoneDrink = function () {
        countAjaxDrink++;
        if (countAjaxDrink >= maxAjaxDrink) {
            getDrinkMatch();
            produceFinalDrink();
        }
    }
    chooseMealCategory(amIdoneMeal);
    chooseMealArea(amIdoneMeal);
    chooseMealIngredient(amIdoneMeal);

    chooseDrinkCategory(amIdoneDrink);
    chooseDrinkAlcohol(amIdoneDrink);
    chooseDrinkIngredient(amIdoneDrink);
});
