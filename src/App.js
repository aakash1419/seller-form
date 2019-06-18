import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SignUp from './forms/SignUp';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
        <Link to={'/sell-form'}>
            <Button variant="contained" color="primary">
              Sell your Pet
            </Button>
        </Link>
        </div>
        <Switch>
            <Route path={'/sell-form'} exact component={SignUp}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
