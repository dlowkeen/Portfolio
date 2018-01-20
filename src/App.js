import React, { Component } from 'react';
import NavigationBar from './components/common/NavigationBar';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Photography from './components/Photography';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Landing />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Photography />
        <Footer />
      </div>
    );
  }
}

export default App;
