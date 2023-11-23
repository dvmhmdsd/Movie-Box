import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios.interceptor";
import useGenresData from "./genres.hook";

export default function useMoviesData() {
  const fetchMovieList = () => {
    return request({
      url: "/discover/movie?include_adult=false&include_video=false&sort_by=popularity.desc",
    });
  };

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

    return moviesWithGenres;
  };

  const { data: genresRes, isLoading: isGenresLoading } = useGenresData();
  const genresList = genresRes?.data.genres;

  const {
    data: res,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovieList,
    enabled: !!genresList?.toString(),
    select: transformGenresIdsIntoGenresItems,
  });

  return { movies: res, isLoading, isError, isGenresLoading, isSuccess };
}
