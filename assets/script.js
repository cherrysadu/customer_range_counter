// Get references to elements
let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterTextEl = document.getElementById("counterText");
let startButtonEl = document.getElementById("startBtn");

// Start button click event listener
startButtonEl.addEventListener("click", onClickStart);

function onClickStart() {
    // Get input values
    let fromCountval = fromUserInputEl.value;
    let toCountval = toUserInputEl.value;

    // Validate input values
    if (fromCountval === "" || toCountval === "") {
        alert("Please enter values for both inputs.");
        return;
    }

    // Parse input values to integers
    let fromCount = parseInt(fromCountval, 10); // Explicitly specify the base (decimal)
    let toCount = parseInt(toCountval, 10);

    if (isNaN(fromCount) || isNaN(toCount)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Start displaying numbers
    displayNumbers(fromCount, toCount);
}

function displayNumbers(fromCount, toCount) {
    let currentCount = fromCount;
    counterTextEl.textContent = currentCount; // Update the counter text initially

    let timerId = setInterval(function() {
        if (currentCount < toCount) {
            currentCount += 1;
            counterTextEl.textContent = currentCount; // Update the counter text
        } else {
            clearInterval(timerId); // Stop the interval when the end is reached
        }
    }, 1000);
}