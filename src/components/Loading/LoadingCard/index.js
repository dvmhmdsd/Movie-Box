import React from "react";

import { useTheme } from "@emotion/react";
import { Box, Grid } from "@mui/material";

import "./style.css";

export default function LoadingCard() {
  const theme = useTheme();

  return (
    <Grid item sm={6} xs={12}>
      <Box sx={{ margin: theme.spacing(20) }} className="timeline-item">
        <div className="animated-background">
          <div className="background-masker header-top"></div>
          <div className="background-masker header-left"></div>
          <div className="background-masker header-right"></div>
          <div className="background-masker header-bottom"></div>
          <div className="background-masker subheader-left"></div>
          <div className="background-masker subheader-right"></div>
          <div className="background-masker subheader-bottom"></div>
          <div className="background-masker content-top"></div>
          <div className="background-masker content-first-end"></div>
          <div className="background-masker content-second-line"></div>
          <div className="background-masker content-second-end"></div>
          <div className="background-masker content-third-line"></div>
          <div className="background-masker content-third-end"></div>
        </div>
      </Box>
    </Grid>
  );
}
