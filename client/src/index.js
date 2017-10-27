import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Route,BrowserRouter, Link, Switch } from 'react-router-dom';

import Root from './Root'
import Foo from './Foo'


ReactDOM.render(

      <div>
        <App />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Root}/>
            <Route path='/foo' component={Foo}/>
          </Switch>
        </BrowserRouter>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
