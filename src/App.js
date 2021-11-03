import AddData from "./AddData";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ShowData from "./ShowData";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/create">
          <AddData />
        </Route>
        <Route path="/">
          <ShowData />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
