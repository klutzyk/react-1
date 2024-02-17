import React from "react";

export default function Header() {
  return (
    <header>
      <title>Hellooo</title>
      <nav className="nav">
        <img src={require("./logo.png")} alt="" className="nav-logo" />

        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
