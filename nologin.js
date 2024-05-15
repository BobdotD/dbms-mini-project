var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


}, 1000);


ScrollReveal().reveal(".top_nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
});
ScrollReveal().reveal(".nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 100,
});

ScrollReveal().reveal(".header", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 200,
});
ScrollReveal().reveal(".section", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});
ScrollReveal().reveal(".footer", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});

const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});


function redirectToNewPage() {
  window.location.href = "login.php"; 
}



const payButtons = document.querySelectorAll('.pay-btn');

payButtons.forEach(button => {
  button.addEventListener('click', function() {
    const card = this.closest('.card'); d
    card.classList.add('unavailable');
    card.querySelector('.adopt_btn').textContent = 'Sold Out';
    card.querySelector('.adopt_btn').disabled = true; 

  });
});

const cancelButtons = document.querySelectorAll('.cancel-btn');

cancelButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Close the card if needed (logic depends on your setup)
    const cardDetails = this.closest('.card-details');
    cardDetails.classList.remove('flipped');
  });
})
