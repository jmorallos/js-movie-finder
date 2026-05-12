export function movieCards(movie) {
  return /* html */ `
    <article class="card-movie">
      <div class="container-cover">
        <img class="movie-cover" src="${movie.coverPath}" />
      </div>
      <h2 class="movie-title">${movie.title}</h2>
      <p class="movie-description">${movie.description}</p>
      <div class="badges">
        <span>${movie.genre}</span>
        <span>&#11088;${movie.rating}</span>
      </div>
      
    </article>
  `;
}