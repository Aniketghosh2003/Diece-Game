var randomvar1 = Math.floor(Math.random() * 6) + 1;
var randomphoto1 = "dice" + randomvar1 + ".png";
var randomsource1 = "images/" + randomphoto1;
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomsource1);

var randomvar2 = Math.floor(Math.random() * 6) + 1;
var randomphoto2 = "dice" + randomvar2 + ".png";
var randomsource2 = "images/" + randomphoto2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomsource2);

if (randomvar1 > randomvar2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomvar1 < randomvar2) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}