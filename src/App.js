import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Checkout from './forms/Checkout';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Link to={'/sell-form'}>
            <Button variant="contained" color="primary">
              Sell your Pet
            </Button>
        </Link>
        <Switch>
            <Route path={'/sell-form'} exact component={Checkout}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
