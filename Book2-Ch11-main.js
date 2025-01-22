var parents = ["Tanja", "Larno"];
var friends = ["Estee", "Elmarine"];
var family = parents.concat(friends).toString();
var familia = document.getElementById("myFamily");
let longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let stringsArray = ["Bob", "Jack", "Jeff"];

stringsArray.splice(3, 0, "Mieke");

console.log(stringsArray);

familia.innerHTML = "<h1>This is my family: " + family + "</h1>";
