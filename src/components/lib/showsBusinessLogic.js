

export const shows = [
    { title: "Stranger Things", genre: "Sci-Fi", rating: 8.7, isAvailable: true },
    { title: "Breaking Bad", genre: "Drama", rating: 9.5, isAvailable: true },
    { title: "Martin", genre: "Comedy", rating: 9.9, isAvailable: true },
    { title: "The Fresh Prince of Bel-Air", genre: "Comedy", rating: 9.6, isAvailable: true },
    { title: "Dark", genre: "Sci-Fi", rating: 8.7, isAvailable: false }
];

// Function 1 - Return only shows available to stream
export function getAvailableShows() {
    return shows.filter(show => show.isAvailable === true);
}

// Function 2 - Return only shows with a rating of 9 or higher
export function getTopRatedShows() {
    return shows.filter(show => show.rating >= 9);
}

// Function 3 - Accept a genre and return all matches
export function getGenreRecommendations(genre) {
    return shows.filter(show => show.genre === genre);
}

console.log("Available Shows:", getAvailableShows());
console.log("Top Rated Shows:", getTopRatedShows());
console.log("Sci-Fi Shows:", getGenreRecommendations("Sci-Fi"));
console.log("Comedy Shows:", getGenreRecommendations("Comedy"));

// export default { getAvailableShows, getTopRatedShows, getGenreRecommendations };
