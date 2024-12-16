let score = JSON.parse(localStorage.getItem('Score')) || { win: 0, lost: 0, tie: 0 };

function handleUserChoice(userMove) {
  const computerMove = generateComputerChoice();
  const resultMsg = getResult(userMove, computerMove);
  updateScore();
  displayResult(userMove, computerMove, resultMsg);
}

function generateComputerChoice() {
  const choices = ['Bat', 'Ball', 'Stump'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(userMove, computerMove) {
  if (userMove === computerMove) {
    score.tie++;
    return "It's a tie!";
  }
  
  if (
    (userMove === 'Bat' && computerMove === 'Ball') ||
    (userMove === 'Ball' && computerMove === 'Stump') ||
    (userMove === 'Stump' && computerMove === 'Bat')
  ) {
    score.win++;
    return 'You won!';
  } else {
    score.lost++;
    return 'Computer won!';
  }
}

function updateScore() {
  localStorage.setItem('Score', JSON.stringify(score));
}

function displayResult(userMove, computerMove, result) {
  document.querySelector('#user-move').innerText = `You chose: ${userMove}`;
  document.querySelector('#computer-move').innerText = `Computer chose: ${computerMove}`;
  document.querySelector('#result').innerText = result;
  document.querySelector('#score').innerText = `Score: Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
}

function resetGame() {
  score = { win: 0, lost: 0, tie: 0 };
  updateScore();
  document.querySelector('#user-move').innerText = '';
  document.querySelector('#computer-move').innerText = '';
  document.querySelector('#result').innerText = '';
  document.querySelector('#score').innerText = 'Score: Won: 0, Lost: 0, Tie: 0';
}
