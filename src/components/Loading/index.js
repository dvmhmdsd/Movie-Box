import React from "react";

import { Grid } from "@mui/material";
import LoadingCard from "./LoadingCard";

export default function Loading() {
  return (
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      <LoadingCard />
      <LoadingCard />
    </Grid>
  );
}
