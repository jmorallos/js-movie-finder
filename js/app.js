import { MovieFinderView } from "./views/MovieFinderView.js";

const root = document.querySelector('#root');

function render() {
  root.innerHTML = MovieFinderView();
}

render();