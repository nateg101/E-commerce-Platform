import React from 'react';
import Homepage from './Pages/Homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
      </Switch>
    </div>
  )
}

export default App;
