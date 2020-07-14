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
        console.log(response.meals);
        var mealCategory = response.meals;

        for (var i = 0; i < mealCategory.length; i++) {
            // console.log(mealCategory[i]);
            mealCategoryArray.push(mealCategory[i].idMeal);
        }

        console.log(mealCategoryArray);
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
        console.log(response.meals);
        var mealArea = response.meals;

        for (var i = 0; i < mealArea.length; i++) {
            // console.log(mealArea[i]);
            mealAreaArray.push(mealArea[i].idMeal);
        }

        console.log(mealAreaArray);
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
        console.log(response.meals);
        var mealIngredient = response.meals;

        for (var i = 0; i < mealIngredient.length; i++) {
            // console.log(mealIngredient[i]);
            mealIngredientArray.push(mealIngredient[i].idMeal);
        }

        console.log(mealIngredientArray);
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
        console.log(response.drinks);
        var drinkCategory = response.drinks;

        for (var i = 0; i < drinkCategory.length; i++) {
            // console.log(drinkCategory[i]);
            drinkCategoryArray.push(drinkCategory[i].idDrink);
        }

        console.log(drinkCategoryArray);
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
        console.log(response.drinks);
        var drinkAlcohol = response.drinks;

        for (var i = 0; i < drinkAlcohol.length; i++) {
            // console.log(drinkAlcohol[i]);
            drinkAlcoholArray.push(drinkAlcohol[i].idDrink);
        }

        console.log(drinkAlcoholArray);
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
        console.log(response.drinks);
        var drinkIngredient = response.drinks;
        if (drinkIngredient.length > 0) {
            for (var i = 0; i < drinkIngredient.length; i++) {
                // console.log(drinkIngredient[i]);
                drinkIngredientArray.push(drinkIngredient[i].idDrink);
            }
        }


        console.log(drinkIngredientArray);
    });
}


// Generating the chosen meal
function produceFinalMeal() {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

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
            // console.log(finalMeal[i].strIngredient1);
            var ingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
            for (let j = 0; j < ingArray.length; j++) {
                var listIngredients = "strIngredient" + ingArray[j];
                ingArray[j] = listIngredients;
                //  console.log(finalMeal[0]);
                var ingredientList = $("<li>");

                ingredientList.text(finalMeal[0].listIngredients);
                $("#meal-ingredients").append(ingredientList);
            }
            // console.log(ingArray)
            
        }
    });
}


$("#generate-meal").on("click", function (event) {
    event.preventDefault();
    chooseMealCategory();
    chooseMealArea();
    chooseMealIngredient();
    chooseDrinkCategory();
    chooseDrinkAlcohol();
    chooseDrinkIngredient();
    produceFinalMeal();
});