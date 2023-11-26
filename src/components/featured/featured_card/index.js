import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Grid, Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./style.css";

export default function FeaturedCard({ movieItem }) {
  const theme = useTheme();
  return (
    <Grid
      item
      key={movieItem.id}
      sx={{
        marginBottom: theme.spacing(8),
        position: "relative",
        borderRadius: theme.spacing(8),
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
      <Box className="overlay">
        <Box component="section" className="featuredCard_heading">
          <Typography
            component="h3"
            sx={{
              fontSize: "fontSize.lg",
              fontWeight: "700",
              margin: "0",
            }}
          >
            {movieItem.title}
          </Typography>
          <Rating
            name="read-only"
            value={movieItem.vote_average}
            readOnly
            sx={{
              fontSize: "fontSize.sm",
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: "fontSize.xs",
            textAlign: "left",
          }}
        >
          {movieItem.release_date?.slice(0, 4)}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.gray.light,
            textAlign: "left",
            marginTop: { sm: theme.spacing(4), xs: theme.spacing(4) },
            fontSize: {
              xs: "fontSize.xs",
              sm: "fontSize.md",
            },
          }}
        >
          {movieItem.overview}
        </Typography>
      </Box>
    </Grid>
  );
}
