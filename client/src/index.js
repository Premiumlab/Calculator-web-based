import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route,BrowserRouter, Switch } from 'react-router-dom';

import Root from './Root';
import Foo from './Foo';
import Calculator from './Calc';

ReactDOM.render(
  <div>
    <App />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Root}/>
        <Route path='/foo' component={Foo}/>
      </Switch>
    </BrowserRouter>
    <div>
      <Calculator />
    </div>
  </div>,
  document.getElementById('root'));
