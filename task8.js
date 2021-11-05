//Exercise 1

const movieInfo = require("./moviedata.json");
let data = [];
function getArray(e) {
  for (i in e) {
    let t = e[i]
    for (j in t)
      t[j] == t.Year || t[j] == t.imdbRating
        ? (t[j] = +t[j])
        : t[j] == t.Genre ||
          t[j] == t.Director ||
          t[j] == t.Writer ||
          t[j] == t.Actors
        ? (t[j] = t[j].split(", "))
        : t[j] == t.imdbVotes && (t[j] = +t[j].split(",").join(""))
    data.push(e[i])
  }
  return data
}

data = getArray(movieInfo);

function moviesBetween(e, t) {
  return data.filter((o) => o.Year >= e && o.Year <= t)
}

console.log("Exercise 1");

function getMovies(e) {
  console.log("\nMovies that were released between 1962 and 1972: ")
    for (let t = 0; t < e.length; t++) console.log(e[t].Title)
}

const selection = moviesBetween(1962, 1972);
logSelectionTitle = getMovies(moviesBetween(1962, 1972));
let bestRated = selection.reduce((e, t) =>
    e.imdbRating > t.imdbRating ? e : t
)

mostVoted = selection.reduce((e, t) => (e.imdbVotes > t.imdbVotes ? e : t));

console.log(
  "\n" +
    `Best rated movie is ${bestRated.Title}, directed by ${bestRated.Director} and was released in ${bestRated.Released}.`
)

console.log(
  `Most rated movie is ${mostVoted.Title}, directed by ${mostVoted.Director} and was released in ${mostVoted.Released}.`
)

//Exercise 2

const findByGenre = data.filter((e) => {
    if (e.Genre.includes("Drama")) return e
})

let bestRated2 = findByGenre.reduce((e, t) =>
    e.imdbRating > t.imdbRating ? e : t
)

mostVoted2 = findByGenre.reduce((e, t) =>
  e.imdbVotes > t.imdbVotes ? e : t
)

console.log("\nExercise 2");

console.log(
  "\n" +
    `Best rated drama is ${bestRated2.Title}, directed by ${bestRated2.Director} and was released in ${bestRated2.Released}.`
)
  console.log(
    `Most rated drama is ${mostVoted2.Title}, directed by ${mostVoted2.Director} and was released in ${mostVoted2.Released}.`
)

//Exercise 3

const findByRating = data.filter((e) => {
  if (e.Rated.includes("R")) return e
})

names = [];
  function getMovies2(e) {
    for (let t = 0; t < e.length; t++) names.push(e[t].Title)
      return names.join(", ")
}

console.log("\nExercise 3");

console.log(
  "\nMovies that are rated R are:\n",
    getMovies2(findByRating) + "."
)

const actors = [];
function getActorNames(e) {
  for (let t = 0; t < e.length; t++) {
    n = e[t].Actors
      for (let e = 0; e < n.length; e++) actors.push(n[e])
  }
  return [...new Set(actors)].join(", ")
}

console.log(
  "\nActors that played in those movies:\n",
    getActorNames(findByRating)
)