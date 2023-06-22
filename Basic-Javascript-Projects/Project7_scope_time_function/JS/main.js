var Y=100 //accomplishing additon math functions with a global variable
function Addition_1() {
    document.write(3+Y+30+"<br>");
}
function Addition_2() {
    document.write(Y+40+"<br>");
}
Addition_1();
Addition_2();

function Subtraction_1() { //accomplishing subtraction fuction with a local variable
   var Z=100
    document.write(Z-5 + "<br>");
}

function Subtraction_2() { //Intentionally introducing an error for troubelshooting with console
    document.write(Z-25)
}
Subtraction_1();
Subtraction_2();

function date_function() { //using the Javascript get date method
    if (new Date().getHours() <20) {
        document.getElementById("statement").innerHTML = "We are open!";
    }
}
   

function if_function() { //using if in afunction
    if (date = 22) 
    document.getElementById("okay").innerHTML = "It is today"
}

function height_function() { //using if, else  in a function
    height = document.getElementById("height").value;
    if (height > 61) {
        message = "You are taller than a Western gorilla."
    }
    else {
        message = "You are shorter than a Western gorilla."
    }
    document.getElementById("How_tall").innerHTML = message;
}

function time_function() { // using if, else if, and else in a function
    var time = new Date().getHours();
    var Reply;
    if (time <12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time >= 12 == time <18) {
        reply = "It is the afternoon!";
    }
    else {
        reply = "It is the evening time.";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}