import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";

import "./style.css";

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
      className="container links"
    >
      <Button variant="text">Conditions of Use</Button>
      <Button variant="text">Privacy &amp; Policy</Button>
      <Button variant="text">Press Room</Button>
    </section>
  );
}
