import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, IconButton, Tooltip } from "@mui/material";
import unavailable from "../../../assets/unavailable.png";
import imdb from "../../../assets/imdb.png";
import tomato from "../../../assets/tomato.png";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./style.css";

export default function MovieCard({ movie }) {
  const theme = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card
        sx={{
          margin: `0 auto ${theme.spacing(8)}`,
          boxShadow: "none",
          position: "relative",
          maxWidth: "75%",
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: 370 }}
          image={
            movie.backdrop_path
              ? `http://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : unavailable
          }
          title={`${movie.title}'s poster`}
          alt={`${movie.title}'s poster`}
        />
        <IconButton
          sx={{
            backgroundColor: isFavorite
              ? "secondary.main"
              : "rgba(209, 213, 219, 0.9)",
            position: "absolute",
            top: theme.spacing(4),
            right: theme.spacing(4),
            color: "#fff",
          }}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FavoriteIcon
            sx={{
              fontSize: "fontSize.md",
            }}
          />
        </IconButton>
        <CardContent sx={{ padding: theme.spacing(1), textAlign: "left" }}>
          <Typography
            sx={{
              fontSize: "fontSize.xs",
              textAlign: "left",
              fontWeight: "700",
              color: "gray.main",
              marginTop: theme.spacing(3),
            }}
            gutterBottom
            component="p"
          >
            USA, {movie?.release_date?.slice(0, 4)}
          </Typography>
          <Typography
            sx={{
              fontSize: "fontSize.md",
              fontWeight: "700",
              marginTop: theme.spacing(2),
              color: "primary.main",
            }}
            gutterBottom
            component="h3"
          >
            {movie.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "fontSize.xs",
              display: "flex",
              justifyContent: "space-between",
            }}
            gutterBottom
            component="section"
          >
            <Tooltip
              title="Avg vote"
              placement="top"
              enterDelay={500}
              leaveDelay={200}
              size="small"
            >
              <Typography
                sx={{
                  marginTop: theme.spacing(1),
                  color: "primary.main",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    display: "inline-block",
                    marginRight: theme.spacing(3),
                  }}
                  src={imdb}
                  alt="imdb's logo"
                />
                <span>{movie.vote_average}</span>
              </Typography>
            </Tooltip>
            <Tooltip
              title="Popularity"
              placement="top-start"
              enterDelay={500}
              leaveDelay={200}
              size="small"
            >
              <Typography
                sx={{
                  marginTop: theme.spacing(1),
                  color: "primary.main",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    display: "inline-block",
                    marginRight: theme.spacing(3),
                  }}
                  src={tomato}
                  alt="imdb's logo"
                />
                {movie.popularity}
              </Typography>
            </Tooltip>
          </Typography>
          <Typography
            sx={{
              fontSize: "fontSize.xs",
            }}
            gutterBottom
            component="section"
          >
            <Typography
              sx={{
                marginTop: theme.spacing(4),
                color: "gray.main",
                fontWeight: "700",
              }}
            >
              {movie.genres?.toString()}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
