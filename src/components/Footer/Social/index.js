import React from "react";
import { useTheme } from "@emotion/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton } from "@mui/material";

import "./style.css";

export default function SocialLinks() {
  const theme = useTheme();
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      className="container"
    >
      <IconButton
        style={{
          fontSize: theme.typography.fontSize.lg,
          fontWeight: "700",
          color: theme.palette.primary.main,
          margin: theme.spacing(4),
        }}
        className="iconItem"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        style={{
          fontSize: theme.typography.fontSize.lg,
          fontWeight: "700",
          color: theme.palette.primary.main,
          margin: theme.spacing(4),
        }}
        className="iconItem"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        style={{
          fontSize: theme.typography.fontSize.lg,
          fontWeight: "700",
          color: theme.palette.primary.main,
          margin: theme.spacing(4),
        }}
        className="iconItem"
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        style={{
          fontSize: theme.typography.fontSize.lg,
          fontWeight: "700",
          color: theme.palette.primary.main,
          margin: theme.spacing(4),
        }}
        className="iconItem"
      >
        <YouTubeIcon />
      </IconButton>
    </section>
  );
}
