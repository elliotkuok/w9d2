import View from "./ttt-view.js"
import Game from "../ttt_node/game.js"

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const el = document.querySelector(".ttt")
  const game = new Game();
  const view = new View(game, el);
})

