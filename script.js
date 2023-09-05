let score = JSON.parse(localStorage.getItem("score"));

if(score === null){
  score = {
    win: 0,
    loss: 0,
    draw: 0
  }; 
}
updateScoreElement();
function computer(){
  randomValue =  Math.random();

  if(randomValue < 0.33)
  {
    return "rock";
  }
  else if(randomValue > 0.67){
    return "scissors";
  }
  else{
    return "paper";
  }
}

function playGames(player){
  let comp = computer();
  let result = "";
  if((comp == "rock" && player == "rock")||(comp == "paper" && player == "paper")||(comp == "scissors" && player == "scissors")){
    result = "Tie!";
    score.draw+=1;
  }
  else if((comp == "rock" && player == "paper")||(comp == "paper" && player == "scissors")||(comp == "scissors" && player == "rock")){
    result = "You Win!";
    score.win+=1;
  }
  else{
    result = "You Loss!";
    score.loss+=1;
  }

  document.querySelector('.js-result').innerHTML = `${result}`;
  document.querySelector('.js-moves').innerHTML = `You <img src="img/${player}-emoji.png" alt="" class="icon"> <img src="img/${comp}-emoji.png" alt="" height="60px" class="icon"> Computer`;
  localStorage.setItem("score",JSON.stringify(score));
  updateScoreElement();
  
}

function reset(){
  localStorage.clear("score");
  score.win = 0;
  score.loss = 0;
  score.draw = 0;
  updateScoreElement();
}

function updateScoreElement(){
  document.querySelector('.js-result-stats').innerHTML = `Win: ${score.win} Draw: ${score.draw} Loss: ${score.loss}`
}
