
// Greeting Function
function updateGreeting() {
    var now = new Date();
    var hour = now.getHours();
    var greeting;

    if (hour >= 6 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    document.getElementById('greeting').textContent = greeting;
}

document.addEventListener('DOMContentLoaded', updateGreeting);


//image Slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}




//Validation Function
document.getElementById('contact-form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    // Check if the email contains 'laurier.ca'
    if (!email.endsWith('@laurier.ca')) {
        alert("Please use an email address ending with @laurier.ca");
        event.preventDefault(); // Prevent form submission
    }
});








