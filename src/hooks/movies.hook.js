import { useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "../utils/axios.interceptor";
import useGenresData from "./genres.hook";

export default function useMoviesData({ pageNumber, searchValue }) {
  const isUserSearching = searchValue && searchValue.length > 0;
  const url = isUserSearching
    ? `/search/movie?query=${searchValue}&include_adult=false&include_video=false&page=${pageNumber}`
    : `/discover/movie?include_adult=false&include_video=false&page=${pageNumber}`;
  const fetchMovieList = () => {
    return request({
      url,
    });
  };

  const queryClient = useQueryClient();

  if (isUserSearching)
    queryClient.invalidateQueries({ queryKey: ["movies", pageNumber] });

  // The response of movies list contains genres_ids list
  // so we need to fetch genres and add genres into their corresponding movies
  const transformGenresIdsIntoGenresItems = (res) => {
    const moviesWithGenres = res?.data.results.map((movie) => {
      const genres = [];

      genresList.forEach((genreItem) => {
        if (movie.genre_ids.includes(genreItem.id)) genres.push(genreItem.name);
      });

      movie.genres = genres;

      return movie;
    });
    const MAX_PAGE_NUM = 500;
    if (res.data.total_pages > MAX_PAGE_NUM)
      res.data.total_pages = MAX_PAGE_NUM;
    return { movies: moviesWithGenres, numOfPages: res.data.total_pages };
  };

  const { data: genresRes, isLoading: isGenresLoading } = useGenresData();
  const genresList = genresRes?.data.genres;

  const { data, isLoading, isError, isSuccess, isPlaceholderData, isFetching } =
    useQuery({
      queryKey: isUserSearching
        ? ["movies", searchValue]
        : ["movies", pageNumber],
      queryFn: fetchMovieList,
      enabled: !!genresList?.toString(),
      select: transformGenresIdsIntoGenresItems,
    });

  return {
    data,
    isLoading,
    isError,
    isGenresLoading,
    isSuccess,
    isPlaceholderData,
    isFetching,
  };
}
