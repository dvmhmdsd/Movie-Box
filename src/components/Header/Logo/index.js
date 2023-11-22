import React from "react";
import logo from "../../../assets/logo.png";

export default function Logo() {
  return (
    <div>
      <img src={logo} alt="The logo of the site showing a TV icon" />
      <h1 className="site-heading">MovieBox</h1>
    </div>
  );
}
