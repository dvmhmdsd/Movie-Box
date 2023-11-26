export const getDefaults = ({ searchValue, pageNumber } = {}) => ({
  movies: {
    BASE_URL: `/discover/movie?include_adult=false&include_video=false&page=${pageNumber}`,
    SEARCH_URL: `/search/movie?include_adult=false&include_video=false&query=${searchValue}&page=${pageNumber}`,
    KEY: "movies",
  },
  genres: {
    BASE_URL: "/genre/movie/list?language=en",
    KEY: "genres",
  },
  featured: {
    BASE_URL: "/trending/movie/day",
    KEY: "featured",
  },
  MAX_PAGE_NUM: 500,
});
