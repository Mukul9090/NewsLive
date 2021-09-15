
import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import NewsItem from './components/NewsItem';
import News from './components/News';
import {
  HashRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import spinner from './components/spinner';




export default class App extends Component {
  render() {

    
  
    return (
      <>
      
      <div><Router>
        <Navbar></Navbar>

        

        <Switch>

        <Route path="/NewsLive">
          <News key="general" country='in' category='general' />
          </Route>

          <Route  path="/home">
          <News key="general" country='in' category='general' />
          </Route>

          <Route  path="/business">
          <News key="business" country='in' category='business'/>
          </Route>

          <Route  path="/general">
          <News key="general" country='in' category='general'/>
          </Route>

          <Route  path="/health">
          <News key="health" country='in' category='health'/>
          </Route>

          <Route  path="/sports">
          <News key="sports" country='in' category='sports'/>
          </Route>

          <Route  path="/science">
          <News key="science" country='in' category='science'/>
          </Route>

          <Route  path="/technology">
          <News key="technology" country='in' category='technology'/>
          </Route>

          <Route  path="/entertainment">
          <News key="entertainment" country='in' category='entertainment'/>
          </Route>

        </Switch>

        </Router>
      </div>
     
      </>
    )
  }
}

