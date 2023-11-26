import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonWithHover = styled(Button)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

export default function NavLinks() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        color: theme.palette.primary.main,
        margin: `${theme.spacing(4)} auto`,
        "&:hover": {
          color: "secondary.main",
          transition: "color 0.3s",
        },
      }}
      className="container"
    >
      <ButtonWithHover variant="text">Conditions of Use</ButtonWithHover>
      <ButtonWithHover variant="text">Privacy &amp; Policy</ButtonWithHover>
      <ButtonWithHover variant="text">Press Room</ButtonWithHover>
    </Box>
  );
}
