import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BrewOptions from './BrewOptions';

class BrewMethods extends React.Component {
  constructor(props) {
    super(props);
    this.handleChemexClick = this.handleChemexClick.bind(this);
    this.handleAeropressClick = this.handleAeropressClick.bind(this);
    this.handlePourOverClick = this.handlePourOverClick.bind(this);
    this.handleFrenchPressClick = this.handleFrenchPressClick.bind(this);
    this.handleDripClick = this.handleDripClick.bind(this);
    this.state = {brewOption: 'none'};
  }
  handleAeropressClick() {
    this.setState({brewOption: 'aeropress'});
  }

  handleChemexClick() {
    this.setState({brewOption: 'chemex'});
  }
  handlePourOverClick() {
    this.setState({brewOption: 'pourOver'});
  }
  handleFrenchPressClick() {
    this.setState({brewOption: 'frenchPress'});
  }
  handleDripClick() {
    this.setState({brewOption: 'drip'});
  }
  render() {
    const brewOption = this.state.brewOption;

    return (
      <div className="row justify-content-around">
        <div className="col-xs-2 m-4">
          <img className="card-img-top" onClick={this.handleAeropressClick} src="https://cdn.shopify.com/s/files/1/1627/2455/t/1/assets/icon-brewguide-aeropress.svg"></img>
        </div>
        <div className="col-xs-2 m-4">
          <img className="card-img-top" onClick={this.handleChemexClick} src="https://cdn.shopify.com/s/files/1/1627/2455/t/1/assets/icon-brewguide-chemex.svg"></img>
        </div>
        <div className="col-xs-2 m-4">
          <img className="card-img-top" onClick={this.handlePourOverClick} src="https://cdn.shopify.com/s/files/1/1627/2455/t/1/assets/icon-brewguide-pourover.svg"></img>
        </div>
        <div className="col-xs-2 m-4">
          <img className="card-img-top" onClick={this.handleFrenchPressClick} src="https://cdn.shopify.com/s/files/1/1627/2455/t/1/assets/icon-brewguide-frenchpress.svg"></img>
        </div>
        <div className="col-xs-2 m-4">
          <img className="card-img-top" onClick={this.handleDripClick} src="https://cdn.shopify.com/s/files/1/1627/2455/t/1/assets/icon-brewguide-drip.svg"></img>
        </div>
        <BrewOptions brewOption={brewOption} />
      </div>
    )
  }
}

export default BrewMethods;