import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
