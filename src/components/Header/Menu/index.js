import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Menu() {
  const theme = useTheme();
  return (
    <section>
      <Button
        style={{
          color: "white",
          textTransform: "inherit",
          fontFamily: "inherit",
          fontSize: `${theme.typography.fontSize.sm}px`,
          fontWeight: "700",
          display: "inline-block",
          marginRight: "1.5rem",
        }}
        variant="text"
      >
        Sign in
      </Button>
      <IconButton
        style={{
          backgroundColor: theme.palette.secondary.main,
        }}
        aria-label="menu"
      >
        <MenuIcon
          size="large"
          style={{
            fontSize: `${theme.typography.fontSize.lg}px`,
            color: "white",
          }}
        />
      </IconButton>
    </section>
  );
}
