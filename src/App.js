import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
<<<<<<< HEAD
import SignUp from './forms/SignUp';
=======
import Checkout from './forms/Checkout';
>>>>>>> b889cc7f0e121da62c223c3c803f3ef61d09c4ce
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

function App() {
  return (
<<<<<<< HEAD
    <div>
      <BrowserRouter>
        <div>
=======
    <BrowserRouter>
>>>>>>> b889cc7f0e121da62c223c3c803f3ef61d09c4ce
        <Link to={'/sell-form'}>
            <Button variant="contained" color="primary">
              Sell your Pet
            </Button>
        </Link>
<<<<<<< HEAD
        </div>
        <Switch>
            <Route path={'/sell-form'} exact component={SignUp}></Route>
        </Switch>
      </BrowserRouter>
    </div>
=======
        <Switch>
            <Route path={'/sell-form'} exact component={Checkout}></Route>
        </Switch>
    </BrowserRouter>
>>>>>>> b889cc7f0e121da62c223c3c803f3ef61d09c4ce
  );
}

export default App;
