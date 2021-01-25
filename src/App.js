import React from 'react'
import './App.css';
import {Route} from 'react-router-dom'
import Clock from './Components/Clock/Clock';
import Contact from './Components/Contact/Contact';
import Welcome from './Components/Welcome/Welcome';
import Navigation from './Components/Navigation/Navigation'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/" 
        exact 
        render= {(...props) => <Welcome name='Alexander'/>} 
      />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
