import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BrewMethods from './BrewMethods.js';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div class="row bg-light">
          <div class="col-md-2 coffee-animation">
            <div id="banner">
              <div class="pour"></div>
              <div class="fill">
                <svg version="1.1" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300">
                  <path fill="#04ACFF" id="waveShape" d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
            c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
            c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z" />
                </svg>
              </div>
            </div>
          </div>
          <h1 class="col-lg-10 m-auto text-left title-text">Coffee Calculator</h1>
        </div>
        <div class="row">
          <h3 class="col-xs-12 mt-5 ml-4">What is your brewing method?</h3>
        </div>
        <BrewMethods />
      </div>
    );
  }
}

export default App;
