function ride_function() { //defining ride button function and output
    var height, can_ride;
    height=document.getElementById("height").value;
    can_ride =(height<52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride."; 

}

function vote_function() {  //defining vote button function and output
    var age, can_vote;
    age=document.getElementById("age").value;
    can_vote =(age<18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote."; 
}

function Pet(Species, Name, Color) { //defining pet class function variables
    this.Pet_Species= Species;
    this.Pet_Name= Name;
    this.Pet_Color= Color;  
}
var Stacy= new Pet("Cat","Stinky", "Black"); //defining instances of the pet class
var Ben= new Pet("Dog", "Fido", "Brown");
var Tara= new Pet("Bird", "Beaker", "Yellow"); 
function Pet_Function() {  //using new and this funtion to call data from Pet funtion instances
    document.getElementById("new_and_this").innerHTML =
    "Stacy has a " + Stacy.Pet_Species+" named "+ Stacy.Pet_Name+ " that is " + Stacy.Pet_Color; //using new and this funtion to call data from Pet funtion instances
}

function myFunction() { //creating a nested funtion to perform counting
    document.getElementById("nested_function").innerHTML = Count();
    function Count() {
        var starting_point = 10;
        function plus_two () {starting_point +=2;}
        plus_two();
        return starting_point;
    }
}
