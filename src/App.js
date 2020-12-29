import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils';
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      console.log(currentUser)
    })
    return () => {
      unsubscribe();
      console.log(currentUser)
    }
  })

  return(
    <div>
      <Header activeUser = { currentUser } />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}

export default App;
