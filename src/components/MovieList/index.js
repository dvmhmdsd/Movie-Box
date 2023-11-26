import React, { useEffect, useState } from "react";
import useMoviesData from "../../hooks/movies.hook";
import MovieCard from "./MovieCard/index";
import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pageNumber]);

  if (isLoading || isGenresLoading || (searchValue && isFetching)) {
    return <Loading />;
  }
  console.log(isError);
  if (isError || (!isError && !data)) {
    return <ErrorComponent />;
  }

  return (
    <Box
      sx={{
        width: "87%",
        margin: `${theme.spacing(6)} auto`,
        textAlign: "center",
      }}
    >
      {searchValue.length === 0 && (
        <Typography
          component="h2"
          sx={{
            fontSize: "fontSize.xl",
            textAlign: "left",
            marginBottom: theme.spacing(14),
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: theme.spacing(10),
          }}
        >
          <Typography sx={{ fontWeight: "700" }}>All Movies</Typography>
          {!isLoading && isFetching && (
            <Typography
              component="span"
              sx={{
                color: "gray.main",
                fontSize: "fontSize.xs",
              }}
            >
              Fetching Updates <CachedIcon />
            </Typography>
          )}
        </Typography>
      )}
      <Grid container spacing={4}>
        {data?.movies.length ? (
          data?.movies.map((movieItem) => (
            <MovieCard key={movieItem.id} movie={movieItem} />
          ))
        ) : (
          <Typography>No Items Found !</Typography>
        )}
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
    </Box>
  );
}
