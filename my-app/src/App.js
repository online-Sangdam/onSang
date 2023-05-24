import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import ScrollTop from "./components/ScrollToTop";
import Home from "./router/Home";
import Select from "./router/Select";
import NavBar from "./components/NavBar";
import Login from "./router/Login";

function App() {
  return (
    <Router>
      <ScrollTop />
      <NavBar />
      <Switch>
        <Route exact path="/onSang/">
          <Home />
        </Route>
        <Route path="/onSang/select">
          <Select />
        </Route>
        <Route path="/onSang/Login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
