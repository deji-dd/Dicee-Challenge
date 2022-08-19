var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1
var img1 = document.getElementsByClassName("img1")[0]
var img2 = document.getElementsByClassName("img2")[0]
var h1 = document.querySelector("h1")
img1.setAttribute("src", "images/dice" + randomNumber1 + ".png")
img2.setAttribute("src", "images/dice" + randomNumber2 + ".png")
if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "<i class='fa-solid fa-flag'></i> Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
  h1.innerHTML = "Player 2 Wins! <i class='fa-solid fa-flag'></i>"
} else {
  h1.textContent = "It's a Draw!"
}
