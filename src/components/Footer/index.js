import React from "react";
import SocialLinks from "./Social";
import NavLinks from "./Links";
import { useTheme } from "@emotion/react";

export default function FooterComponent() {
  const theme = useTheme();
  return (
    <footer>
      <SocialLinks />
      <NavLinks />
      <p
        style={{
          color: theme.palette.gray.main,
          fontSize: theme.typography.fontSize.md,
          fontWeight: "700",
          margin: theme.spacing(8),
        }}
      >
        &copy; 2021 MovieBox by Adriana Eka Prayudha
      </p>
    </footer>
  );
}
