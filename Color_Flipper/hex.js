const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//hex color pallet is including #1-9 and letters A-F, ex: f15025....# is required to be at the beginning so don't forget!
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    //color starts with a #, then a loop that iterate 6 times to create a 6 value hex color + "#". use Let not const!
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}