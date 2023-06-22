function addition_Function() {
    var addition= 2 + 2;
    document.getElementById("math").innerHTML = addition;
}
function subtraction_Function() {
    var subtraction = 5-2;
    document.getElementById("math2").innerHTML = "5-2 = " + subtraction;
}
function multiplication() {
    var simple_math = 6*8;
    document.getElementById("math3").innerHTML = "6x8= " + simple_math;
}

function division() {
    var easy_math = 48/6;
    document.getElementById("math4").innerHTML = "48/6= " + easy_math;
}
function more_math() {
    var simple_math = (1+2)*10/2-5;
    document.getElementById("math5").innerHTML = "1 plus 2, times 10, divided by 2 and then minus 5 equals " + simple_math;
}
function modulus_operator() {
    var simple_math = 25%6;
    document.getElementById("math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
}
    var x=10;
    x++;
    document.write(x );

    var y=5.25;
    y--;
    document.write(y);

    window.alert(Math.random()*100);

    document.write(Math.PI);
    
    document.write(Math.round(24.3));
    
    document.write(Math.trunc(7.53))