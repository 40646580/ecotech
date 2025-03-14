let newsLetter = document.getElementById('newsletter-input');
let newsLetterBtn = document.getElementById('newsletter-btn');


newsLetterBtn.addEventListener("click", function newsLetterSignUp() {
    if (newsLetter.value.includes("@") && newsLetter.value.endsWith("com") || newsLetter.value.endsWith("co.uk")) {
        alert("You have been signed up to the EcoTech newsletter.")
    } else {
        alert("Please enter a valid email address.");
    }
});