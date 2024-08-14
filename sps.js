// Get DOM elements
let span = document.querySelector("span");
let btn = document.getElementById("btn");
let box1Element = document.querySelector(".box1");
let box2Element = document.querySelector(".box2");

// Define the game options
const game = [
    {
        Image: "scissor.jpeg",
        value: 1
    },
    {
        Image: "stone.jpg",
        value: 2
    },
    {
        Image: "paper.jpg",
        value: 3
    }
];

// Function to determine the result of the game
function getGameResult(value1, value2) {
    if (value1 === value2) return "draw";
    if (
        (value1 === 1 && value2 === 3) ||  // Scissors beats Paper
        (value1 === 2 && value2 === 1) ||  // Rock beats Scissors
        (value1 === 3 && value2 === 2)     // Paper beats Rock
    ) {
        return "box 1 win";
    }
    return "box 2 win";
}

// Add event listener to the button
btn.addEventListener("click", function () {
    // Get random indexes for the game options
    let random1 = Math.floor(Math.random() * game.length);
    let random2 = Math.floor(Math.random() * game.length);

    // Set the background images of box1 and box2 elements
    box1Element.style.backgroundImage = `url('${game[random1].Image}')`;
    box2Element.style.backgroundImage = `url('${game[random2].Image}')`;

    // Determine the result of the game
    let result = getGameResult(game[random1].value, game[random2].value);

    // Display the result
    span.innerText = result;
});
