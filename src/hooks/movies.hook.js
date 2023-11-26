import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GET } from "../utils/axios.interceptor";
import useGenresData from "./genres.hook";
import { getDefaults } from "./defaults";

export default function useMoviesData({ pageNumber, searchValue }) {
  const defaults = getDefaults({ pageNumber, searchValue });
  const isUserSearching = searchValue && searchValue.length > 0;
  const url = isUserSearching
    ? defaults.movies.SEARCH_URL
    : defaults.movies.BASE_URL;

  const { data: genresRes, isLoading: isGenresLoading } = useGenresData();
  const genresList = genresRes?.data.genres;

  const queryClient = useQueryClient();
  if (isUserSearching)
    queryClient.invalidateQueries({
      queryKey: [defaults.movies.KEY, pageNumber],
    });

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
    if (res.data.total_pages > defaults.MAX_PAGE_NUM)
      res.data.total_pages = defaults.MAX_PAGE_NUM;
    return { movies: moviesWithGenres, numOfPages: res.data.total_pages };
  };

  const { data, isLoading, isError, isSuccess, isPlaceholderData, isFetching } =
    useQuery({
      queryKey: isUserSearching
        ? [defaults.movies.KEY, searchValue]
        : [defaults.movies.KEY, pageNumber],
      queryFn: () => {
        return GET({
          url,
        });
      },
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
