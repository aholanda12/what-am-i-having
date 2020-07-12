var categoryArray = [];
var mealCategoryChoice = "";
var mealAreaChoice = "";


function chooseMealCategory(event) {
    event.preventDefault();
    mealCategoryChoice = $("#meal-category-choice").val();
    mealAreaChoice = $("#meal-category-choice").val();
    mealIngChoice = $("#meal-category-choice").val();
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
            categoryArray.push(mealCategory[i].idMeal);
        }
        // var categoryId = mealCategory[]meals.idMeal;
        // categoryArray.push(categoryId);
        console.log(categoryArray);
    });

}

$("#generate-meal").on("click",chooseMealCategory);