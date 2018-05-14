// Option 1 Game design notes


// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.

// Initial results
var totalWins = 0;
var totalLosses = 0;

// Initial Totals
var runningTotal = 0;
var numToMatch = 0;

// Initial crystal values
var crystal = {
    blue:
    {
        value: 0
    },
    green:
    {
        value: 0
    },
    orange:
    {
        value: 0
    },
    yellow:
    {
        value: 0
    }
};
  
// Function for generating the random numbers
var randomGenerate = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function for resetting after each round
var init = function() {
   
    // Generate random number to match between 19 and 120
    numToMatch = randomGenerate(19, 120);

    // Reset the running total
    runningTotal = 0;

    // Assign new random values for each crystal between 1 and 12
    crystal.blue.value = randomGenerate(1, 12);
    crystal.orange.value = randomGenerate(1, 12);
    crystal.green.value = randomGenerate(1, 12);
    crystal.yellow.value = randomGenerate(1, 12);

    // Push updates to HTML
    $("#crystals-sum").text(runningTotal);
    $("#num-to-match").text(numToMatch);

};

// Function to check if numbers match or user exceeds, then start a new round.
var doNumsMatch = function() {

    // Check if running total of the crystals is larger than number to match
    if (runningTotal > numToMatch) {
        alert("You lost.  Try again.");

        // Increment losses
        totalLosses++;

        // Push changes to HTML
        $("#loss-total").text(totalLosses);

        // Start a new round
        init();
    }

    else if (runningTotal === numToMatch) {
        alert("Congratulations! You Won!");

        // Increment wins
        totalWins++;

        // Push chnanges to HTML
        $("#win-total").text(totalWins);

        // Start a new round
        init();
    }
};

// Function for recalculating total and checking for a match after each crystal click.
var addOnClick = function(clickedCrystal) {

    // Add to running total
    runningTotal += clickedCrystal.value;

    // Push changes to HTML
    $("#crystals-sum").text(runningTotal);

    // Check if numbers match
    doNumsMatch();
};

// Start game on page reload
init();

// Call functions as each crystal is clicked
$("#blue").click(function() {
addOnClick(crystal.blue);
});

$("#orange").click(function() {
addOnClick(crystal.orange);
});

$("#green").click(function() {
addOnClick(crystal.green);
});

$("#yellow").click(function() {
addOnClick(crystal.yellow);
});
