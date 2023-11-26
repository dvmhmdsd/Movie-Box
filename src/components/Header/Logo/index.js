import React from "react";
import logo from "../../../assets/logo.png";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

export default function Logo() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="The logo of the site showing a TV icon" />
      <Typography
        sx={{ fontSize: "fontSize.lg", marginLeft: theme.spacing(8) }}
      >
        MovieBox
      </Typography>
    </Box>
  );
}
