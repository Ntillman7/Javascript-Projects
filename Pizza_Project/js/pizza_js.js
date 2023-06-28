function getReceipt() { //inistializes the string so it can get passed from function to function, grows line by line
    var text1="<h3>You Ordered:<h3>";
    var runningTotal=0;
    var sizeTotal =0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i=0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1=text1+selectedSize+"<br>";
        }
    }  
    if (selectedSize ==="Personal Pizza") { // setting the prices for each size pizza
        sizeTotal=6;
    } else if (selectedSize ==="Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize ==="Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize ==="Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize ==="Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal=sizeTotal; //defining the running total based on pizza size and what will show in the console
    console.log(selectedSize+"= $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal,text1) { //defining the function to select toppings and vegetables from the list
    var toppingTotal=0;
    var selectedTopping =[];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if(toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1=text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length; //setting that more than one topping will registar to start charging for toppings
    if(toppingCount >1) {
        toppingTotal=(toppingCount-1);
    } else {
        toppingTotal=0;
    }
    runningTotal = (runningTotal+toppingTotal); // adding the topping total price to the running total and what will show in the console
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1"+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong><h3>";

    var vegetableTotal=0; // defining the vegetable array and how it will be handled within the function
    var selectedVegetable =[];
    var vegetableArray = document.getElementsByClassName("vegetables");
    for (var k = 0; k < vegetableArray.length; k++) {
        if(vegetableArray[k].checked) {
            selectedVegetable.push(vegetableArray[k].value);
            console.log("selected veggie item: ("+vegetableArray[k].value+")");
            text1=text1+vegetableArray[k].value+"<br>";
        }
    }
    var vegetableCount = selectedVegetable.length; //setting that after 1 vegetable choice the customer will be charged for every one after
    if(vegetableCount >1) {
        vegetableTotal=(vegetableCount-1);
    } else {
        vegetableTotal=0;
    }
    runningTotal = (runningTotal+vegetableTotal); //adding the vegetable total to the total price 
    console.log("total selected veggie items: "+vegetableCount);
    console.log(vegetableCount+" veggie - 1 free veggie = "+"$"+vegetableTotal+".00");
    console.log("vegetable text1"+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong><h3>";
};