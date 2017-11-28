import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/common/NavigationBar';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Landing />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
