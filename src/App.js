import logo from "./logo.svg";
import "./App.scss";
import UserTableContainer from "./containers/UserTable";
import UserDetailsContainer from "./containers/UserDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/users">
            <UserDetailsContainer />
          </Route>
          <Route path="/">
            <UserTableContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
