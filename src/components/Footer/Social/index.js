import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const ExtendedIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: theme.typography.fontSize.lg,
  fontWeight: "700",
  color: theme.palette.primary.main,
  margin: theme.spacing(4),
  "&:hover svg": {
    color: theme.palette.secondary.main,
    transition: "color 0.3s",
  },
}));

export default function SocialLinks() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      className="container"
    >
      <ExtendedIconButton>
        <FacebookIcon />
      </ExtendedIconButton>
      <ExtendedIconButton>
        <InstagramIcon />
      </ExtendedIconButton>
      <ExtendedIconButton>
        <TwitterIcon />
      </ExtendedIconButton>
      <ExtendedIconButton>
        <YouTubeIcon />
      </ExtendedIconButton>
    </Box>
  );
}
