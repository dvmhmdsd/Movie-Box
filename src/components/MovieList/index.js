import React from "react";
import useMoviesData from "../../hooks/movies.hook";
import MovieCard from "./MovieCard/index";

export default function MovieList() {
  const { movies, isLoading } = useMoviesData();

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <section>
      <h2>All Movies</h2>
      {movies.map((movieItem) => (
        <MovieCard key={movieItem.id} movie={movieItem} />
      ))}
    </section>
  );
}
