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

// Grabbing the array for Meal Category
function chooseMealCategory() {
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
        }

        // console.log(mealCategoryArray);
    });
}

// Grabbing the array for Meal Area
function chooseMealArea() {
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
        }

        // console.log(mealAreaArray);
    });
}

// Grabbing the array for Meal Ingredient
function chooseMealIngredient() {
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
        }

        // console.log(mealIngredientArray);
    });
}

// Grabbing the array for Drink Category
function chooseDrinkCategory() {
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
        }

        // console.log(drinkCategoryArray);
    });
}

// Grabbing the array for Drink Alcohol
function chooseDrinkAlcohol() {
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
        }

        // console.log(drinkAlcoholArray);
    });
}

// Grabbing the array for Drink Ingredient
function chooseDrinkIngredient() {
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
            }
        }


        // console.log(drinkIngredientArray);
    });
}


// Generating the chosen meal
function produceFinalMeal() {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52803";

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
                if (measurements[k] !== null && measurements[k] !== "") {
                    var ingredientList = $("<li>");
                    ingredientList.text(measurements[k] + " " + ingredients[k]);
                    $("#meal-ingredients").append(ingredientList);
                }
            }

        }
    });
}


// Generating the chosen drink
function produceFinalDrink() {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007";

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
                if (drinkMeasurements[n] !== null && drinkMeasurements[n] !== "") {
                    var drinkIngredientList = $("<li>");
                    drinkIngredientList.text(drinkMeasurements[n] + " " + drinkIngredients[n]);
                    $("#drink-ingredients").append(drinkIngredientList);
                }
            }

        }
    });
}

$("#generate-meal").on("click", function (event) {
    event.preventDefault();
    // chooseMealCategory();
    // chooseMealArea();
    // chooseMealIngredient();
    // chooseDrinkCategory();
    // chooseDrinkAlcohol();
    // chooseDrinkIngredient();
    produceFinalMeal();
    produceFinalDrink();
});