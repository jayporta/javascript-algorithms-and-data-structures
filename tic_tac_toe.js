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
const moves = { x: [], o: [] };
// This graph represents winning connections
// There is a more elegant way but I haven't figured it out yet
// I do this on weekends in 5-minute sittings between personal time, chores, dad stuff, etc.
const winningGraph = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleSquareClick(square) {
    if (square.classList.contains('empty')) {
        filledSquares.push(square.dataset.id);
        moves.x.push(Number(square.dataset.id));
        square.classList.remove('empty');
        square.innerHTML = x;
        checkForWinner('x');
        makeAImove();
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
          moves.o.push(Number(random));
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

let winnerFound = null;
function checkForWinner(player) {
  if (!winnerFound) {
    // TODO: Improve UI so the winning move is rendered
    // before the alert (actually just ditch the alert and do some cool CSS)
    for (let i = 0; i < winningGraph.length; i++) {
      if (winningGraph[i].every(x => moves[player].includes(x))) {
        winnerFound = true;
        window.alert(`Winner is ${player}`);
      }
    }
  }
}

createSquares();
