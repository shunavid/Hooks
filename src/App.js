import React from 'react';
import UseState from './HookState/UseState';
import { Switch, Route } from 'react-router-dom'
import './App.css'
import UseEffect from './HookEffect/UseEffect';
import Routing from './Routing';
import UseReducer from './HookReducer/UseReducer';

function App() {
  return (
   <>
  
    <Routing />
  
    <div className="App">
 
      <Switch>
        <Route path="/UseState">
          <UseState />
        </Route>
        <Route path="/UseEffect">
          <UseEffect />
        </Route>
        <Route path="/UseReducer">
          <UseReducer />
        </Route>
      </Switch>
    </div>
 
  </>
  );
}

export default App;
