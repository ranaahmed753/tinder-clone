import React from 'react';
import './App.css'
import Header from './Header'
import Chats from './Chats'
import ChatScreen from './ChatScreen'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>


      <Router>

        <Switch>

          <Route path='/chat/:person'>
            <Header backButton='/' />
            <ChatScreen />
          </Route>

          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>

          <Route path='/'>
            <Header />

            <TinderCards />
            <SwipeButtons />
          </Route>


        </Switch>
      </Router>


    </div>
  );
};

export default App;
