// Contact form 

var name = $("#name");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var form = document.getElementById("form");
var errorElement = document.getElementById('error');


// form.addEventListener("submit", (e) => {
//     var messages = []
//     if (name.value === '' || name.value == null) {
//         messages.push('Name is required');
//     }
//     if (email.indexOf("@") === -1 || email.length < 6){
//         messages.push('Email is required')
//     }

//     if (messages.length > 0) {
//     e.preventDefault();
//     errorElement.innerText = messages.join(', ');
//     }
// });

$("form").submit(
    function(){
      var userName =  name.val();
    }
)