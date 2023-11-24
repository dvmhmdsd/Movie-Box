import React from "react";
import { useTheme } from "@emotion/react";
import { Grid, Rating } from "@mui/material";
import Loading from "../Loading";
import useFeaturedData from "../../hooks/featured.hook";

import Typography from "@mui/material/Typography";
import "./style.css";

export default function FeaturedList() {
  const { data, isLoading } = useFeaturedData();
  const theme = useTheme();

  const movies = data?.data.results.slice(0, 2);
  console.log(movies);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section
      style={{
        width: "87%",
        margin: `${theme.spacing(6)} auto`,
      }}
    >
      <h2
        style={{
          fontSize: `${theme.typography.fontSize.xl}px`,
          textAlign: "left",
          marginBottom: theme.spacing(14),
        }}
        sx={{ marginLeft: { xs: "unset", sm: theme.spacing(12) } }}
      >
        <span>Featured Movies</span>
      </h2>
      <Grid
        container
        spacing={2}
        style={{
          marginBottom: theme.spacing(8),
          justifyContent: "space-around",
        }}
      >
        {movies?.map((movieItem) => (
          <Grid
            item
            key={movieItem.id}
            style={{
              marginBottom: theme.spacing(8),
              position: "relative",
              borderRadius: theme.spacing(8),
              padding: "0",
            }}
            xs={12}
            lg={5}
          >
            <img
              src={`http://image.tmdb.org/t/p/w500${movieItem.backdrop_path}`}
              alt={`${movieItem.title}'s poster`}
              style={{
                borderRadius: theme.spacing(8),
                overflow: "hidden",
                width: "100%",
                minWidth: "100%",
                height: "100%",
              }}
            />
            <div className="overlay">
              <section className="featuredCard_heading">
                <h3
                  style={{
                    fontSize: `${theme.typography.fontSize.lg}px`,
                    fontWeight: "700",
                    margin: "0",
                  }}
                >
                  {movieItem.title}
                </h3>
                <Rating
                  name="read-only"
                  value={movieItem.vote_average}
                  readOnly
                  style={{
                    fontSize: `${theme.typography.fontSize.sm}px`,
                  }}
                />
              </section>
              <Typography
                style={{
                  fontSize: `${theme.typography.fontSize.xs}px`,
                  textAlign: "left",
                }}
              >
                {movieItem.release_date.slice(0, 4)}
              </Typography>
              <Typography
                style={{
                  color: theme.palette.gray.light,
                  textAlign: "left",
                }}
                sx={{
                  marginTop: { sm: theme.spacing(4), xs: theme.spacing(4) },
                  fontSize: {
                    xs: `${theme.typography.fontSize.xs}px`,
                    sm: `${theme.typography.fontSize.sm}px`,
                  },
                }}
              >
                {movieItem.overview}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
