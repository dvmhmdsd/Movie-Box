import React from "react";
import useMoviesData from "../../hooks/movies.hook";
import MovieCard from "./MovieCard/index";
import { useTheme } from "@emotion/react";
import { Grid } from "@mui/material";
import Loading from "../Loading";

export default function MovieList() {
  const { movies, isLoading, isError, isGenresLoading, isSuccess } =
    useMoviesData();
  const theme = useTheme();
  const isNetworkFailureExists = () => !isLoading && !isSuccess;

  if (isLoading || isGenresLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>An error occurred, please try again</p>;
  }

  if (isNetworkFailureExists()) {
    return (
      <p>
        An error occurred, please check your network connection and try again
      </p>
    );
  }

  return (
    <section style={{ width: "87%", margin: `${theme.spacing(16)} auto` }}>
      <h2
        style={{
          fontSize: `${theme.typography.fontSize.xl}px`,
          textAlign: "left",
          marginBottom: theme.spacing(14),
          marginLeft: theme.spacing(12),
        }}
      >
        All Movies
      </h2>
      <Grid container spacing={2}>
        {movies?.map((movieItem) => (
          <MovieCard key={movieItem.id} movie={movieItem} />
        ))}
      </Grid>
    </section>
  );
}
