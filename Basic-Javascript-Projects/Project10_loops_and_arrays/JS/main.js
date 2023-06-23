function call_loop() {
    var digit ="";
    var x=1;
    while(x<6) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit;
}

function string_length_function() {
    let text = "My cat is cute.";
    let length= text.length;
    document.getElementById("long").innerHTML= length;
}

var instruments = ["guitar", "drums", "piano", "bass", "violin","trumpet","flute"];
var content="";
var Y;
function for_loop() {
    for (Y=0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    documents.getElementById("list_of_instruments").innerHTML = content;
}