import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import ScrollTop from "./components/ScrollToTop";
import Home from "./router/Home";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Router>
      <ScrollTop />
      <SideBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
