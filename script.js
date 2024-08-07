"use strict";
/* 
Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
Вивести зображення, отримане випадковим чином (Math.random)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const imgElement = document.createElement("img");

imgElement.setAttribute("src", "./images/" + random(1, 10) + ".png");

document.body.append(imgElement);
