import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home  from "./views/home/home";

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
