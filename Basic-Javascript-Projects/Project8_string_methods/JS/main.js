function sentence() { //using the conactenate method
    var part_1 = "This will ";
    var part_2 = "a full sentence ";
    var part_3 = "when I am done ";
    var part_4 = "creating this function.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_method() { //using the slice method
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}

function uppercase_method() { // using the upperCase method
    let sentence="This is a sentence.";
    let upper = sentence.toUpperCase();
    document.getElementById("uppercase").innerHTML = upper;
}

function search_method() { //using the search method
   let text = " This is a sentence with a few words in it."  
   let position = text.search("is");
   document.getElementById("search").innerHTML = position;
}

function string_method() { //using the string method
    var X= 1234;
    document.getElementById("number_string").innerHTML = X.toString();
}
function precision_method() { //using the precision method
    var X=12938.3012987376112
    document.getElementById("precision").innerHTML = X.toPrecision(10);
}
function tofixed_method() { // using the toFixed method
    let num = 6.789552
    let n = num.toFixed(3);
    document.getElementById("tofixed").innerHTML = n;
}

function valueof_method() { //using the valueOf method
    let text = "This is some text."
    let result = text.valueOf();
    document.getElementById("valueof").innerHTML = result
}