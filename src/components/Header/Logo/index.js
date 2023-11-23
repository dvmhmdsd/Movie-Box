import React from "react";
import logo from "../../../assets/logo.png";
import { useTheme } from "@emotion/react";
import "./style.css";

export default function Logo() {
  const theme = useTheme();
  return (
    <div className="logo">
      <img src={logo} alt="The logo of the site showing a TV icon" />
      <h1
        className="site_heading"
        style={{ fontSize: `${theme.typography.fontSize.lg}px` }}
      >
        MovieBox
      </h1>
    </div>
  );
}
