
var randomNumber1 = Math.floor( Math.random() * 6) + 1;
var randomNumber2 = Math.floor( Math.random() * 6) + 1;

var randomDiceSource1 = "images/dice" + randomNumber1 + ".png";
var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";

console.log(randomDiceSource1)
console.log(randomDiceSource2)

document.querySelectorAll("img")[0].setAttribute("src", randomDiceSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelectorAll("p.winner")[0].classList.remove('invisible');
}
else if (randomNumber1 < randomNumber2) {
  document.querySelectorAll("p.winner")[1].classList.remove('invisible');
}
