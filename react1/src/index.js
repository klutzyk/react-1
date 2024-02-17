import react from "react";
import ReactDOM from "react-dom";
import "./style.css";

// Components
function Header() {
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

function Footer() {
  return (
    <footer>
      <p>All rights reserved.</p>
    </footer>
  );
}

function MainContent() {
  return (
    <body>
      <h1>Best languages</h1>
      <ol>
        <li>React</li>
        <li>Node</li>
        <li>Angular</li>
      </ol>
    </body>
  );
}

function PageComp() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<PageComp />, document.getElementById("root"));
