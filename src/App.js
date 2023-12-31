import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<News key ='general' pagSize={5} country="in" category="sports"/>}></Route>
          <Route path="/business" element={<News key='business' pagSize={5} country="in" category="busines"/>}></Route>
          <Route path="/entertainment" element={<News key='entertainment' pagSize={5} country="in" category="entertainment"/>}></Route>
          <Route path="/health" element={<News key='health' pagSize={5} country="in" category="health"/>}></Route>
          <Route path="/sports" element={<News key='sports' pagSize={5} country="in" category="sports"/>}></Route>
          <Route path="/general" element={<News key='general' pagSize={5} country="in" category="general"/>}></Route>
          <Route path="/science" element={<News key='science' pagSize={5} country="in" category="science"/>}></Route>
          <Route path="/technology" element={<News key='technology' pagSize={5} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}