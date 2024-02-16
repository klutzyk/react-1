import react from "react";
import ReactDOM from "react-dom";

// Component
function PageComp() {
  return (
    <div>
      <ol>
        <li>React</li>
        <li>Node</li>
        <li>Angular</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<PageComp />, document.getElementById("root"));
