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
        variant="text"
        sx={{
          color: "white",
          textTransform: "inherit",
          fontFamily: "inherit",
          fontSize: "fontSize.sm",
          fontWeight: "700",
          marginRight: theme.spacing(6),
          display: { xs: "none", md: "inline-block" },
        }}
      >
        Sign in
      </Button>
      <IconButton
        sx={{
          backgroundColor: "secondary.main",
        }}
        aria-label="menu"
      >
        <MenuIcon
          size="large"
          sx={{
            fontSize: "fontSize.lg",
            color: "white",
          }}
        />
      </IconButton>
    </section>
  );
}
