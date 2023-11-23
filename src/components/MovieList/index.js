import React from "react";
import useMoviesData from "../../hooks/movies.hook";
import MovieCard from "./MovieCard/index";

export default function MovieList() {
  const { data: movies, isLoading } = useMoviesData();

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <section>
      <h2>All Movies</h2>
      {movies.data?.results.map((movieItem) => (
        <MovieCard movie={movieItem} />
      ))}
    </section>
  );
}
