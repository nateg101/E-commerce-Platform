import React from 'react';
import Homepage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component'
import Header from './Components/header/header.component'
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App;
