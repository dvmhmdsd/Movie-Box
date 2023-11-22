import React from "react";
import SocialLinks from "./Social";
import NavLinks from "./Links";

export default function FooterComponent() {
  return (
    <footer>
      <SocialLinks />
      <NavLinks />
      <p>&copy; 2021 MovieBox by Adriana Eka Prayudha</p>
    </footer>
  );
}
