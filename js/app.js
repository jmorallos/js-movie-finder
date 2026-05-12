import { movieFinderView } from "./views/MovieFinderView.js";

const root = document.querySelector('#root');

function render() {
  root.innerHTML = movieFinderView();
}

render();