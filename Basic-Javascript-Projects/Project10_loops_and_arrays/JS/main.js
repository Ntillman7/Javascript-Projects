function call_loop() { //Defining a function which uses a while loop
    var digit ="";
    var x=1;
    while(x<6) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit;
}

function string_length_function() { //Defining a fuction which shows the length of a string
    let text = "My cat is cute.";
    let length= text.length;
    document.getElementById("long").innerHTML= length;
}

var instruments = ["guitar", "drums", "piano", "bass", "violin","trumpet","flute"]; //creating an array
var content="";
var Y;
function for_loop() { //defining a function that will create a list from the above data
    for (Y=0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

function array_function() { // defining a function which will create and array and be able to use data from that array
    var lizard_thing = [];
    lizard_thing[0] = "sunbathing";
    lizard_thing[1] = "scuttling";
    lizard_thing[2] = "crawling";
    lizard_thing[3]= "eating bugs";
    document.getElementById("array").innerHTML = "This lizard is " + lizard_thing[1] + ".";
}

function constant_function() { //defining a functio that will allow us to change and add data to an array
    const candle= {scent: "vanilla", brand:"yankee", color:"off-white"};
    candle.color="purple";
    candle.price="$20"
    document.getElementById("constant").innerHTML="The cost of the " + candle.color+ ", " + candle.scent +" candle was "+ candle.price;
}

var Z=12
function let_function() { // defining a funtion which has both global and block scope variables
    let Z = "Happy"
    document.getElementById("keyword").innerHTML = Z
}
document.getElementById("keyword2").innerHTML = Z

function return_function() { // defining a function which uses the return statment
    var C = "I'm a carrot!"
    return "Hello, " + C;
}
document.getElementById("return").innerHTML=return_function();

let book= { //defining a function which uses the return funtion plus "this"
    author: "Neil Gaiman ",
    type: "paperback ",
    title: "Coraline ",
    published: "July 2,2002 ",
    description : function() {
        return "The book is called " + this.title;
    }
};
document.getElementById("book_object").innerHTML = book.description();

function break_function() { // defining a function that uses both break and continue 
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 7) { break; }
        else if (i===3) {continue;}
        text += "The number is " + i + "<br>";
    }
document.getElementById("break_continue_loop").innerHTML = text;
}

