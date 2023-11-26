import React from "react";
import error from "../../assets/error.png";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

export default function ErrorComponent() {
  const theme = useTheme();

  return (
    <Box sx={{ margin: theme.spacing(20) }}>
      <img src={error} alt="Error while getting movies data" />
      <Typography
        sx={{
          color: theme.palette.primary.main,
          fontSize: theme.typography.fontSize.lg,
        }}
      >
        An error occurred while getting the movies, please try again
      </Typography>
      <Typography
        sx={{
          color: theme.palette.gray.main,
          fontSize: theme.typography.fontSize.sm,
        }}
      >
        Check your network connection
      </Typography>
    </Box>
  );
}
