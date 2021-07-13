import React from 'react';
import './App.css';
import Done from './pages/Done';
import Favourite from './pages/Favourite';
import TrashBin from './pages/TrashBin';
import Home from './pages/Home'
import {
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import NavbarCom from './components/Navbar';
import NoMatch from './pages/NoMatch';
// import Navbar from './components/Navbar';


function App() {


  return (
    <div>
      <NavbarCom />
      <Switch>
        <Redirect exact from="/" to="/home"/>
          {/* <Route path="/" exact>  */}
          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/done">
            <Done/>
          </Route>
          <Route path="/favourite">
            <Favourite/>
          </Route>
          <Route path="/trash">
            <TrashBin/>
          </Route>

          {/* <Route component={NoMatch} /> */}
          <NoMatch/>
        </Switch>
        <footer>
          &copy; CanDo To-Do List
        </footer>
    </div>
  );
}

export default App;
