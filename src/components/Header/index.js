import React from "react";
import Logo from "./Logo/index";
import Search from "./Search/index";
import MenuComponent from "./Menu/index";
import poster from "../../assets/poster.png";
import "./style.css";
import { useTheme } from "@emotion/react";

export default function HeaderComponent() {
  const theme = useTheme();

  return (
    <header
      className="site_intro"
      style={{ fontSize: theme.typography.fontSize.sm }}
    >
      <nav className="site_nav">
        <section className="nav_items container">
          <Logo />
          <Search sx={{ display: { xs: "none", md: "inline-flex" } }} />
          <MenuComponent />
        </section>
        <section>
          <Search sx={{ display: { xs: "inline-flex", md: "none" } }} />
        </section>
      </nav>
      <div className="poster_img">
        <img src={poster} alt="The poster of the site showing john wick pic" />
      </div>
    </header>
  );
}
