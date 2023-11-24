import React, { useEffect, useState } from "react";
import useMoviesData from "../../hooks/movies.hook";
import MovieCard from "./MovieCard/index";
import { useTheme } from "@emotion/react";
import { Grid } from "@mui/material";
import Loading from "../Loading";

import Pagination from "@mui/material/Pagination";
import CachedIcon from "@mui/icons-material/Cached";
import ErrorComponent from "../Error";

import "./style.css";

export default function MovieList({ searchValue }) {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    data,
    isLoading,
    isError,
    isGenresLoading,
    isPlaceholderData,
    isFetching,
  } = useMoviesData({ pageNumber, searchValue });
  const theme = useTheme();
  console.log(searchValue);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pageNumber]);

  if (isLoading || isGenresLoading || (searchValue && isFetching)) {
    return <Loading />;
  }

  if (isError || (!isError && !data)) {
    return <ErrorComponent />;
  }

  return (
    <section
      style={{
        width: "87%",
        margin: `${theme.spacing(6)} auto`,
        textAlign: "center",
      }}
    >
      {searchValue.length === 0 && (
        <h2
          style={{
            fontSize: `${theme.typography.fontSize.xl}px`,
            textAlign: "left",
            marginBottom: theme.spacing(14),
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          sx={{ marginLeft: { xs: "unset", sm: theme.spacing(12) } }}
        >
          <span>All Movies</span>
          {!isLoading && isFetching && (
            <span
              style={{
                color: theme.palette.gray.main,
                fontSize: theme.typography.fontSize.sm,
              }}
            >
              Fetching Updates <CachedIcon />
            </span>
          )}
        </h2>
      )}
      <Grid container spacing={2}>
        {data?.movies.map((movieItem) => (
          <MovieCard key={movieItem.id} movie={movieItem} />
        ))}
      </Grid>
      <Pagination
        count={data?.numOfPages}
        onChange={(_evt, val) => setPageNumber(val)}
        color="primary"
        size="medium"
        page={pageNumber}
        disabled={isPlaceholderData}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: theme.spacing(8),
        }}
      />
    </section>
  );
}
