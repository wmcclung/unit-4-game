
// This event will occur when the DOM has finished loading
$(document).ready(function() {

    
    // pick from numbers 19 - 120
    var targetNumber = Math.floor(Math.random()*101+19);
    // 2. The target number will be displayed
    $("#random_number").text(targetNumber);

    // Counter variable will start off at 0
    var counter = 0;

    // random numbers for crystal picking number from 1 - 12
    
    var dog = Math.floor(Math.random()*11+1);
    
    var swan = Math.floor(Math.random()*11+1);
    
    var pig = Math.floor(Math.random()*11+1);
    
    var fish = Math.floor(Math.random()*11+1);

    // Variables for score
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    // initial metrics
    $("#totalScore").text(userScore);
    $("#userWins").text(wins);
    $("#userLosses").text(losses);
    
    // resets variables
    function reset() {
        targetNumber = Math.floor(Math.random()*101+19);
        // reset after game
        $("#random_number").text(targetNumber);
        userScore = 0;
        //restart
        $("#totalScore").text(userScore);
        num1 = Math.floor(Math.random()*11+1);
        num2 = Math.floor(Math.random()*11+1);
        num3 = Math.floor(Math.random()*11+1);
        num4 = Math.floor(Math.random()*11+1);
    }

    // click function dog
    $("#row4col1").on("click", "#dog", function() {

        // add dog
        userScore = userScore + dog;

        // update score
        $("#totalScore").text(userScore);

        

        // If I win
        if (userScore === targetNumber) {
            alert("You won!");
            wins++;
            $("#userWins").text(wins);
            reset();
        }

        // If i lose
        else if (userScore > targetNumber) {
            alert("You lose!");
            losses++;
            $("#userLosses").text(losses);
            reset();
        }
    });

    // click function swan
    $("#row4col1").on("click", "#swan", function() {

        // add swan
        userScore = userScore + swan;

        // update score
        $("#totalScore").text(userScore);

        

        // If I win
        if (userScore === targetNumber) {
            alert("You won!");
            wins++;
            $("#userWins").text(wins);
            reset();
        }

        // If I lose
        else if (userScore > targetNumber) {
            alert("You lose!");
            losses++;
            $("#userLosses").text(losses);
            reset();
        }
    });

    // click function pig
    $("#row4col1").on("click", "#pig", function() {

        // add pig
        userScore = userScore + pig;

        // update score
        $("#totalScore").text(userScore);

     

        // If I win
        if (userScore === targetNumber) {
            alert("You won!");
            wins++;
            $("#userWins").text(wins);
            reset();
        }

        // If I lose
        else if (userScore > targetNumber) {
            alert("You lose!");
            losses++;
            $("#userLosses").text(losses);
            reset();
        }
    });

    // click function fish
    $("#row4col1").on("click", "#fish", function() {

        // add fish
        userScore = userScore + fish;

        // update score
        $("#totalScore").text(userScore);

        

        // If I win
        if (userScore === targetNumber) {
            alert("You won!");
            wins++;
            $("#userWins").text(wins);
            reset();
        }

        // If I lose
        else if (userScore > targetNumber) {
            alert("You lose!");
            losses++;
            $("#userLosses").text(losses);
            reset();
        }
    });

});