import { DATA_MOVIES } from "../data/data.js"
import { MovieCards } from "../components/MovieCards.js"

export function MovieFinderView() {
  return /* html */ `
    <main class="page-movie-finder page">
      <header>
        <h1>Looking for a movie?</h1>
          <div class="toolbar">
            <div class="wrap-filter"><input type="text" /></div>
            <div class="wrap-filter"></div>
          </div>
      </header>

      <section class="container-movies">
        ${DATA_MOVIES.map((movie) => MovieCards(movie)).join('')}
      </section>
    </main>
  `
}