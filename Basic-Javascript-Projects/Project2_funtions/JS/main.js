function my_first_function() { //defining a funtion
    var sentence="You clicked the button"; //concatenating a two  variables into a sentence
    sentence += ", good job!";
    document.getElementById("click_button").innerHTML = sentence; //creating the expression for the id
}


function myFunction(p1,p2) {
    return p1*p2;
}

let x = myFunction(4,2);
document.write(x)

document.getElementById("demo").style.color = "red";

