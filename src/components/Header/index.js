import React from "react";

import Logo from "./Logo/index";
import Search from "./Search/index";
import MenuComponent from "./Menu/index";
import poster from "../../assets/poster.png";

import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

export default function HeaderComponent() {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{ fontSize: "fontSize.sm", position: "relative", color: "white" }}
    >
      <Box
        component="nav"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          position: "absolute",
          width: "100%",
          padding: theme.spacing(4),
        }}
      >
        <Box
          sx={{
            marginBottom: theme.spacing(8),
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="container"
        >
          <Logo />
          <Search sx={{ display: { xs: "none", md: "inline-flex" } }} />
          <MenuComponent />
        </Box>
        <Box component="section">
          <Search
            sx={{
              display: { xs: "inline-flex", md: "none" },
              flexBasis: "100%",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ "& >img": { width: "100%" } }}>
        <img src={poster} alt="The poster of the site showing john wick pic" />
      </Box>
    </Box>
  );
}
