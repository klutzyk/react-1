import react from "react";
import ReactDOM from "react-dom";

const page = (
  <div>
    <img src="/react1/public/logo192.png" alt="React" />
    <h1>Fun facts about React!</h1>
    <ul>
      <li>Was released in 2013</li>
      <li>Created by Jordan Walk</li>
      <li>Over 100k stars on Github</li>
      <li>Powers thousands of enterprise apps</li>
    </ul>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
