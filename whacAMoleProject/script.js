const Model = (() => {
  const gameBoard = Array.from({ length: 12 }, (_, i) => ({ id: i, hasMole: false }));
  let score = 0;
  let timeLeft = 30;
  let moleInterval = null;
  let timerInterval = null;

  return {
    gameBoard,
    getScore: () => score,
    incrementScore: () => score++,
    resetScore: () => (score = 0),
    getTime: () => timeLeft,
    resetTime: () => (timeLeft = 30),
    decrementTime: () => timeLeft--,
    setMoleInterval: (interval) => (moleInterval = interval),
    getMoleInterval: () => moleInterval,
    clearMoleInterval: () => clearInterval(moleInterval),
    setTimerInterval: (interval) => (timerInterval = interval),
    getTimerInterval: () => timerInterval,
    clearTimerInterval: () => clearInterval(timerInterval)
  };
})();

const View = (() => {
  const gameBoardEl = document.getElementById('gameBoard');
  const scoreEl = document.getElementById('score');
  const timerEl = document.getElementById('timer');
  const moleImageSrc = document.getElementById('moleImage').src;

  const renderBoard = (gameBoard) => {
    gameBoardEl.innerHTML = '';
    gameBoard.forEach((block) => {
      const div = document.createElement('div');
      div.classList.add('block');
      div.dataset.id = block.id;

      if (block.hasMole) {
        const moleImg = new Image();
        moleImg.src = moleImageSrc;
        moleImg.classList.add('mole');
        moleImg.style.maxWidth = '90%';
        moleImg.style.maxHeight = '90%';
        moleImg.style.display = 'block';
        moleImg.style.margin = 'auto';
        moleImg.style.position = 'absolute';
        moleImg.style.top = '0';
        moleImg.style.bottom = '0';
        moleImg.style.left = '0';
        moleImg.style.right = '0';
        div.appendChild(moleImg);
      }

      gameBoardEl.appendChild(div);
    });
  };

  const updateScore = (score) => {
    scoreEl.textContent = score;
  };

  const updateTimer = (time) => {
    timerEl.textContent = time;
  };

  return {
    renderBoard,
    updateScore,
    updateTimer
  };
})();

// Initialize game board with moles immediately
const initializeGame = () => {
  // Place 3 initial moles
  const emptyBlocks = [...Model.gameBoard];
  for (let i = 0; i < 3; i++) {
    if (emptyBlocks.length === 0) break;
    const randomIndex = Math.floor(Math.random() * emptyBlocks.length);
    emptyBlocks[randomIndex].hasMole = true;
    emptyBlocks.splice(randomIndex, 1);
  }
  View.renderBoard(Model.gameBoard);
};

const startGame = () => {
  // Reset model
  Model.resetScore();
  Model.resetTime();
  Model.gameBoard.forEach(block => block.hasMole = false);
  
  // Place 3 initial moles
  initializeGame();
  
  // Update view
  View.updateScore(Model.getScore());
  View.updateTimer(Model.getTime());

  // Clear any existing intervals
  Model.clearMoleInterval();
  Model.clearTimerInterval();

  // Start mole interval
  const moleInterval = setInterval(() => {
    const activeMoles = Model.gameBoard.filter(b => b.hasMole).length;
    const emptyBlocks = Model.gameBoard.filter(b => !b.hasMole);
    
    if (emptyBlocks.length > 0 && activeMoles < 3) {
      const randomBlock = emptyBlocks[Math.floor(Math.random() * emptyBlocks.length)];
      randomBlock.hasMole = true;
      View.renderBoard(Model.gameBoard);
    }
  }, 1000);
  Model.setMoleInterval(moleInterval);

  // Start timer interval
  const timerInterval = setInterval(() => {
    Model.decrementTime();
    View.updateTimer(Model.getTime());
    
    if (Model.getTime() <= 0) {
      Model.clearMoleInterval();
      Model.clearTimerInterval();
      alert('Time is Over! Your final score is: ' + Model.getScore());
    }
  }, 1000);
  Model.setTimerInterval(timerInterval);
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize game board with moles immediately
  initializeGame();

  const startBtn = document.getElementById('startBtn');

  // Handle block clicks
  document.getElementById('gameBoard').addEventListener('click', (e) => {
    const blockEl = e.target.closest('.block');
    if (!blockEl) return;
    
    const id = parseInt(blockEl.dataset.id);
    const block = Model.gameBoard.find(b => b.id === id);
    
    if (block.hasMole) {
      block.hasMole = false;
      Model.incrementScore();
      View.updateScore(Model.getScore());
      View.renderBoard(Model.gameBoard);
    }
  });

  // Start button handler
  startBtn.addEventListener('click', startGame);
});