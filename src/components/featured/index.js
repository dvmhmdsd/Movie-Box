import React from "react";

import { useTheme } from "@emotion/react";

import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import Loading from "../Loading";
import FeaturedCard from "./featured_card";

import useFeaturedData from "../../hooks/featured.hook";

export default function FeaturedList() {
  const { data, isLoading, isError } = useFeaturedData();
  const theme = useTheme();
  const defaults = {
    MAX_FEATURED_MOVIES_COUNT: 2,
  };
  const movies = data?.data.results.slice(
    0,
    defaults.MAX_FEATURED_MOVIES_COUNT
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) return;

  return (
    <Box
      sx={{
        width: "87%",
        margin: `${theme.spacing(6)} auto`,
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontSize: "fontSize.xl",
          textAlign: "left",
          marginBottom: theme.spacing(14),
          marginLeft: { xs: "unset", md: theme.spacing(12) },
          fontWeight: "700",
        }}
      >
        Featured Movies
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          marginBottom: theme.spacing(8),
          justifyContent: "space-around",
          "& >.MuiGrid-item": {
            paddingTop: 0,
            paddingLeft: 0,
          },
        }}
      >
        {movies?.map((movieItem) => (
          <FeaturedCard key={movieItem.id} movieItem={movieItem} />
        ))}
      </Grid>
      <hr />
    </Box>
  );
}
