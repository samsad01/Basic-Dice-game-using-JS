let randnum1 = Math.floor(Math.random() * 6) + 1;
let randnum2 = Math.floor(Math.random() * 6) + 1;

let randDicepic1 = "images/Dice" + randnum1 + ".png";
let randDicepic2 = "images/Dice" + randnum2 + ".png";

let image1 = document.querySelectorAll("img")[0];
let image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randDicepic1);
image2.setAttribute("src", randDicepic2);

if(randnum1 > randnum2)
{
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS !!!";
}
else if(randnum2 > randnum1)
{
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS !!!";
}
else{
    document.querySelector("h1").innerHTML = "OMG IT'S A DRAW !?!?!?";
}