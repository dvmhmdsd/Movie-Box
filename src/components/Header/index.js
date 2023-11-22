import React from "react";
import Logo from "./Logo/index";
import Search from "./Search/index";
import { Menu } from "@mui/material";
import poster from "../../assets/poster.jpeg";

export default function HeaderComponent() {
  return (
    <header>
      <Logo />
      <Search />
      <Menu />
      <div className="poster-image">
        <img src={poster} alt="The poster of the site showing john wick pic" />
      </div>
    </header>
  );
}
