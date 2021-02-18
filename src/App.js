import logo from "./logo.svg";
import "./App.scss";
import UserTableContainer from "./containers/UserTable";
import UserDetailsContainer from "./containers/UserDetails";
import UserNotFound from "./components/UserDetails/UserNotFound";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/users">
            <UserDetailsContainer />
          </Route>
          <Route exact path="/">
            <UserTableContainer />
          </Route>
          <Route>
            <UserNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
