import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import ScrollTop from "./components/ScrollToTop";
import Home from "./router/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <ScrollTop />
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
