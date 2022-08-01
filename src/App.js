import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddResource from "./Components/AddResource";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-resource" component={AddResource} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
