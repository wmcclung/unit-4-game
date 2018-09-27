//variables needed//

var gameNumber;
var wins = 0;
var losses = 0;
var score = 0;
var gems= [0,0,0,0];

//Functions needed//

//set gamenumber between 19 and 120//

function randomGameNumber () {

    gameNumber = Math.floor(Math.random() * 120) + 19;

}
$(".target-number").text(gameNumber);
//set crystal values to between 1-12//
for(var i = 0; i < gems.length; i++) {
    gems[i] = (Math.floor(Math.random() * 12) + 1);
}


   $(".col-md-3 dog").click(function(){
    var gemScore = gems[0];
    
    score += gemScore;
    

    $(".finalScore").text(score);
    win();
    lose();
   });
   

   $(".pig").click(function(){
    var gemScore = gems[1];
    
    score += gemScore;
    

    $(".finalScore").text(score);
    win();
    lose();
   });
   

   $(".swan").click(function(){
    var gemScore = gems[2];
    
    score += gemScore;
    

    $(".finalScore").text(score);
    win();
    lose();
   });

   
   $(".fish").click(function(){
    var gemScore = gems[1];
    
    score += gemScore;
    

    $(".finalScore").text(score);
    win();
    lose();
   });


   //The player wins if their total score matches the random number from the beginning of the game.
   //create conditions: if total score equals to the computer generated number, alert win
   function win(){
    if(totalScore === number){
    alert("You Win!");
    wins++;
    $(".winCount").text(wins);
    reset();
    }
   }

   //The player loses if their score goes above the random number.
   //create condition for loss if the total scoree is not equal to the computer generated number. Alert loss
   function lose(){
    if(totalScore > number) {
      alert("You Lose!");
      loss++;
      $(".lossCount").text(loss);
      reset();
    }
   }
   //The game restarts whenever the player wins or loses.
   //reset the game after each alert of win/loss

    //--Reset--
     function reset(){
      number = 0; 
      totalScore = 0; 
      ranNum = [0,0,0,0]

      number = (Math.floor(Math.random() * 101) + 19);
      console.log(number);

     $(".computerNum").text(number);
    
     for(var i = 0; i < ranNum.length; i++) {
      ranNum[i] = (Math.floor(Math.random() * 12) + 1);
       console.log(ranNum);
       $(".finalScore").text(totalScore);
     }
     }

    //When the game begins again, the player should see a new random number. 
    //Also, all the crystals will have four new hidden values. 
    //Of course, the user's score (and score counter) will reset to zero.

   //The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
   //store the number of wins or losses to correct variable

  //The random number shown at the start of the game should be between 19 - 120.

  //Each crystal should have a random hidden value between 1 - 12.