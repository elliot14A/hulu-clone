const API_KEY = process.env.API_KEY;

type Query = {
  url: string;
  title: string;
};

type Request = {
  query: string;
  body: Query;
};

const requests: Request[] = [
  {
    query: "fetchTrending",
    body: {
      title: "Trending",
      url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
  },
  {
    query: "fetchTopRated",
    body: {
      title: "Top Rated",
      url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
  },
  {
    query: "fetchActionMovies",
    body: {
      title: "Action",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
  },
  {
    query: "fetchComedyMovies",
    body: {
      title: "Comedy",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
  },
  {
    query: "fetchHorrorMovies",
    body: {
      title: "Horror",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
  },
  {
    query: "fetchRomanceMovies",
    body: {
      title: "Romance",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
  },
  {
    query: "fetchMysteryMovies",
    body: {
      title: "Mystery",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
  },
  {
    query: "fetchSciFi",
    body: {
      title: "Sci Fi",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
  },
  {
    query: "fetchWestern",
    body: {
      title: "Western",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
  },
  {
    query: "fetchAnimation",
    body: {
      title: "Animation",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
  },
  {
    query: "fetchTVShows",
    body: {
      title: "TV Shows",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
  },
];

export default requests;
