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
        console.log(queryURL);
        console.log(response.meals);
        var mealCategory = response.meals;

        for (var i = 0; i < mealCategory.length; i++) {
            console.log(mealCategory[i]);
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
        console.log(queryURL);
        console.log(response.meals);
        var mealArea = response.meals;

        for (var i = 0; i < mealArea.length; i++) {
            console.log(mealArea[i]);
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
        console.log(queryURL);
        console.log(response.meals);
        var mealIngredient = response.meals;

        for (var i = 0; i < mealIngredient.length; i++) {
            console.log(mealIngredient[i]);
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
        console.log(queryURL);
        console.log(response.drinks);
        var drinkCategory = response.drinks;

        for (var i = 0; i < drinkCategory.length; i++) {
            console.log(drinkCategory[i]);
            drinkCategoryArray.push(drinkCategory[i].idDrink);
        }

        console.log(drinkCategoryArray);
    });
}

// Grabbing the array for Drink Category
function chooseDrinkAlcohol() {
    drinkAlcoholChoice = $("#drink-alcohol-choice").val();
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + drinkAlcoholChoice;
       
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response.drinks);
        var drinkAlcohol = response.drinks;

        for (var i = 0; i < drinkAlcohol.length; i++) {
            console.log(drinkAlcohol[i]);
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
        console.log(queryURL);
        console.log(response.drinks);
        var drinkIngredient = response.drinks;

        for (var i = 0; i < drinkIngredient.length; i++) {
            console.log(drinkIngredient[i]);
            drinkIngredientArray.push(drinkIngredient[i].idDrink);
        }

        console.log(drinkIngredientArray);
    });
}


$("#generate-meal").on("click", function(event) {
    event.preventDefault();
    chooseMealCategory();
    chooseMealArea();
    chooseMealIngredient();
    chooseDrinkCategory();
    chooseDrinkAlcohol();
    chooseDrinkIngredient();
});