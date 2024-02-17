import react from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

// Components

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
