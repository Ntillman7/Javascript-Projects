function countdown() { //creating a countdown function that ends with an alert message
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds= seconds-1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick,1000);
        if (seconds == -1) {
            alert ("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

let slideIndex = 1; //setting index of picture in slideshow to 1
showSlides(slideIndex); // calls main function names showSlides, see below function for reference

function plusSlides(n) { //setting the function for moving slide to next picture, calling the main function and using n
    showSlides(slideIndex +=n);
}

function currentSlide(n) { //setting the function for the current slide calling the main function and using n
    showSlides(slideIndex = n);
}

function showSlides(n) { //defining the function for changing between sides using either side arrows or dots below the pictures
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length) {slideIndex=1}
    if(n < 1) {slideIndex=slides.length}
    for(i = 0; i < dots.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i <dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className += " active";
}