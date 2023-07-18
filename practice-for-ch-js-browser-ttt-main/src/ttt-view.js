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
    grid.addEventListener('click', this.handleClick.bind(this))
  }

  
  
  handleClick(e) {
    const cell = e.target;
    const row = parseInt(cell.dataset.row)
    const col = parseInt(cell.dataset.col)
    const pos = [row, col]

    if (this.game.board.isEmptyPos(pos)) {
      this.game.playMove(pos)
    }

    // "LI" === cell.nodeName && this.makeMove(cell);
    if (cell.nodeName === "LI") {
      this.makeMove(cell)
    }
  }

  makeMove(square) {
    
// here you handle the visual changes and call play move 
   
  }
  
  handleGameOver() {
  }
}

export default View;