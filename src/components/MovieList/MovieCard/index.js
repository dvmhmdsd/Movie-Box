import React from "react";
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

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card
        sx={{ maxWidth: 250 }}
        style={{
          marginLeft: theme.spacing(12),
          marginBottom: theme.spacing(8),
          boxShadow: "none",
          position: "relative",
        }}
        className="movieItem"
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
          style={{
            backgroundColor: `rgba(209, 213, 219, 0.9)`,
            position: "absolute",
            top: theme.spacing(4),
            right: theme.spacing(4),
            color: "#fff",
          }}
        >
          <FavoriteIcon
            style={{
              fontSize: `${theme.typography.fontSize.md}px`,
            }}
          />
        </IconButton>
        <CardContent style={{ padding: "0", textAlign: "left" }}>
          <Typography
            style={{
              fontSize: `${theme.typography.fontSize.xs}px`,
              textAlign: "left",
              fontWeight: "700",
              color: theme.palette.gray.main,
              marginTop: theme.spacing(3),
            }}
            gutterBottom
            component="p"
          >
            USA, {movie.release_date.slice(0, 4)}
          </Typography>
          <Typography
            style={{
              fontSize: `${theme.typography.fontSize.md}px`,
              fontWeight: "700",
              marginTop: theme.spacing(2),
              color: theme.palette.primary.main,
            }}
            gutterBottom
            component="h3"
          >
            {movie.title}
          </Typography>
          <Typography
            style={{
              fontSize: `${theme.typography.fontSize.xs}px`,
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
            >
              <p
                style={{
                  marginTop: theme.spacing(1),
                  color: theme.palette.primary.main,
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
              </p>
            </Tooltip>
            <Tooltip
              title="Popularity"
              placement="top-start"
              enterDelay={500}
              leaveDelay={200}
            >
              <p
                style={{
                  marginTop: theme.spacing(1),
                  color: theme.palette.primary.main,
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
              </p>
            </Tooltip>
          </Typography>
          <Typography
            style={{
              fontSize: `${theme.typography.fontSize.xs}px`,
            }}
            gutterBottom
            component="section"
          >
            <p
              style={{
                marginTop: "0",
                color: theme.palette.gray.main,
                fontWeight: "700",
              }}
            >
              {movie.genres.toString()}
            </p>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
