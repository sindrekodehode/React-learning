// import { useState } from "react";
import HeaderEl from "./assets/header.jsx";
import CrabCards from "./assets/section.jsx";

import "./App.css";

function Structure() {
  return (
    <>
      <header>
        <HeaderEl />
      </header>
      <section>
        <CrabCards />
      </section>
      <footer>
        <p>Made by SindreKodehode in a hurry</p>
      </footer>
    </>
  );
}

export default Structure;
