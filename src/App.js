import logo from './logo.svg';
import './App.css';
import React from 'react';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Form from './pages/Form';
import Addproduct from './pages/Addproduct';

// import { provider } from "react-redux"
// import store from './store'
// import Count from './components/Count'


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/add-product" component={Addproduct} />
        </Switch>
      </Router>
    
   
  );
}

export default App;
