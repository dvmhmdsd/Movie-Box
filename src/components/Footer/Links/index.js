import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";

export default function NavLinks() {
  const theme = useTheme();

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        color: theme.palette.primary.main,
        margin: `${theme.spacing(4)} auto`,
      }}
      className="container"
    >
      <Button variant="text">Conditions of Use</Button>
      <Button variant="text">Privacy &amp; Policy</Button>
      <Button variant="text">Press Room</Button>
    </section>
  );
}
