import React from "react";
import SocialLinks from "./Social";
import NavLinks from "./Links";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

export default function FooterComponent() {
  const theme = useTheme();
  return (
    <Box component="footer">
      <SocialLinks />
      <NavLinks />
      <Typography
        sx={{
          color: "gray.main",
          fontSize: "fontSize.md",
          fontWeight: "700",
          margin: theme.spacing(8),
        }}
      >
        &copy; 2021 MovieBox by Adriana Eka Prayudha
      </Typography>
    </Box>
  );
}
