const API_KEY = "877340ae53ef36a6e937e65dcb184a7f";

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=269`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=45`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=50`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=29`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9564`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=315`,
}

export default requests;