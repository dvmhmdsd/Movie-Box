import React from "react";
import useMoviesData from "../../hooks/movies.hook";
import MovieCard from "./MovieCard/index";

export default function MovieList() {
  const { movies, isLoading, isError, isGenresLoading, isSuccess } =
    useMoviesData();

  const isNetworkFailure = () => !isLoading && !isSuccess;

  if (isLoading || isGenresLoading) {
    return <p>Loading ...</p>;
  }

  if (isError) {
    return <p>An error occurred, please try again</p>;
  }

  if (isNetworkFailure()) {
    return (
      <p>
        An error occurred, please check your network connection and try again
      </p>
    );
  }

  return (
    <section>
      <h2>All Movies</h2>
      {movies?.map((movieItem) => (
        <MovieCard key={movieItem.id} movie={movieItem} />
      ))}
    </section>
  );
}
