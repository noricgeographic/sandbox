import ReactDom from "react-dom";
import { App } from "./App";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";


ReactDom.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById("root")
);
// ReactDom.render(<CssModules />, document.getElementById("root"));
// ReactDom.render(<StyledJsx />, document.getElementById("root"));
// ReactDom.render(<StyledComponents />, document.getElementById("root"));
// ReactDom.render(<Emotion />, document.getElementById("root"));
