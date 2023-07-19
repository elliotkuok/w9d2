class View {
  constructor(game, el) {
    this.game = game;
    this.el = el; //might need to change
    this.setupBoard();
  }
  
  setupBoard() {
    const grid = document.createElement("ul");
    grid.classList.add('grid');

    for(let row = 0; row < 3; row++){
      for(let col = 0; col < 3; col++){
        const cell = document.createElement("li");
        cell.dataset.row = row;
        cell.dataset.col = col;
        // cell.dataset.pos = JSON.strigfy([row, col])
        grid.appendChild(cell);
      }
    }
    this.el.appendChild(grid);
    grid.addEventListener('click',(e)=> this.handleClick(e))
  }

  // bindEvents() {
  //   const grid = document.querySelector('.grid');
  //   grid.addEventListener('click', event => this.handleClick(event));
  // }
  
  handleClick(e) {
    const cell = e.target;
    const row = parseInt(cell.dataset.row)
    const col = parseInt(cell.dataset.col)
    const pos = [row, col]
    console.log(pos)
    if (this.game.board.isEmptyPos(pos) && cell.nodeName === "LI") {
      this.game.playMove(pos);
      this.makeMove(cell);
    } else {
      alert("CAN'T DO THAT")
    }

  }

  makeMove(square) {
    const currentPlayer = this.game.currentPlayer;
    square.innerHTML = currentPlayer;
    square.className = currentPlayer;
  }
  
  handleGameOver() {

  }
}

export default View;