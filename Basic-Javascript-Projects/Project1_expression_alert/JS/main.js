var F="Hello,Dinosaur"; //Defining a variable with a string value
window.alert(F); //creating an alert box containing the defined variable
var X= "\"Dinosaurs are cool" +" and sometimes they are stinky\"- some 5 year old"; //Defining a variable with a concatenated string in quotes
document.write(X); 

document.write("Sometimes I dream" + " about dinosaurs."); //Creating a concatetenated string 

var Herbivore = "tricerotops" , Carnivore = "trex", Omnivore="citipati"; //defining multiple variables
document.write(Carnivore); //Getting the value of a defined variable

document.write(3+4); //writing an expression

var Sent1="This is the beginning of the string" // defining a variable
var Sent2=" and this is the end of the string." //defining a variable
document.write(Sent1+ Sent2) // writing an expression using the defined variables

function myFunction() {
    var str="You used the button!";
    document.getElementById ("key_down").innerHTML = str;
}