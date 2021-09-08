
import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import NewsItem from './components/NewsItem';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import spinner from './components/spinner';




export default class App extends Component {
  render() {
    return (
      <>

  
      <div><Router>
        <Navbar></Navbar>

        
        <Switch>

          <Route path="/home">
          <News country='us' category='general' />
          </Route>

          <Route path="/business">
          <News country='us' category='business'/>
          </Route>

          <Route path="/general">
          <News country='us' category='general'/>
          </Route>

          <Route path="/health">
          <News country='us' category='health'/>
          </Route>

          <Route path="/sports">
          <News country='us' category='sports'/>
          </Route>

          <Route path="/science">
          <News country='us' category='science'/>
          </Route>

          <Route path="/technology">
          <News country='us' category='technology'/>
          </Route>

          <Route path="/entertainment">
          <News country='us' category='entertainment'/>
          </Route>

        </Switch>

        </Router>
      </div>
     
      </>
    )
  }
}

