function my_dictionary() {
    var Candy = {
        Type: "gummies",
        Flavor:"strawberry",
        Brand: "Haribo",
        Packaging: "bagged",
    };
    delete Candy.Packaging;
    document.getElementById("dictionary").innerHTML = Candy.Flavor
}