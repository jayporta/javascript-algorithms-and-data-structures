const x = (
        `<div class="mark">
            <svg viewbox="0 0 40 40">
                <path class="x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
        </div>`
);
const o = (
        `<div class="mark">
            <svg viewbox="0 0 40 40">
            <circle class="o" cx="20" cy="20" r="12"/>
            </svg>
        </div>`
);
const squares = document.querySelectorAll('.square');
const filledSquares = [];
const xMoves = [];
const oMoves = [];

function handleSquareClick(square) {
    if (square.classList.contains('empty')) {
        filledSquares.push(square.dataset.id);
        xMoves.push([
          Number(square.parentElement.dataset.rowindex),
          Number(square.dataset.index)
        ]);
        square.classList.remove('empty');
        square.innerHTML = x;
        if (!checkForWinner('x')) makeAImove();
    }
}

function makeAImove() {
    let random = Math.floor(Math.random() * squares.length).toString();

    if (filledSquares.includes(random) && filledSquares.length < squares.length ) {
        return makeAImove();
    } else {
        const squareForAI = document.querySelector(`[data-id~="${random}"`);
        if (squareForAI.classList.contains('empty')) {
          filledSquares.push(random);
          oMoves.push([
            Number(squareForAI.parentElement.dataset.rowindex),
            Number(squareForAI.dataset.index)
          ]);
          squareForAI.classList.remove('empty');
          squareForAI.innerHTML = o;
          checkForWinner('o');
        }
    }
}

// Create squares
function createSquares() {
  let count = 0;

  for (let i = 0; i < squares.length; i++) {
      squares[i].setAttribute('data-id', i);
      if (i % 3 === 0) count = 0;
      squares[i].setAttribute('data-index', count);
      squares[i].onclick = () => handleSquareClick(squares[i]);
      count++;
  }
}

// This graph represents winning connections
const winningGraph = [
  [1, 3, 4], // square 0
  [0, 2, 4], // square 1
  [1, 4, 5], // square 2
  [0, 4, 6], // square 3
  [0, 1, 2, 3, 5, 6, 8], // square 4 (middle)
  [2, 4, 8], // square 5
  [3, 4, 7], // square 6
  [6, 4, 8], // square 7
  [4, 5, 7], // square 8
];

function checkForWinner(player) {
  return false
}

createSquares();
