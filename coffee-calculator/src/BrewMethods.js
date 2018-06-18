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
    this.handleLightClick = this.handleLightClick.bind(this);
    this.handleMediumClick = this.handleMediumClick.bind(this);
    this.handleDarkClick = this.handleDarkClick.bind(this);
    this.state = {brewOption: 'none', brewRatio: 'none', gramsOfBeverage: 0, gramsCoffee: 0};
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
  handleLightClick() {
    this.setState({brewRatio: 17});
  }
  handleMediumClick() {
    this.setState({brewRatio: 16});
  }
  handleDarkClick() {
    this.setState({brewRatio: 15});
  }
  updateGramsOfBeverage(e) {
    const brewRatio = this.state.brewRatio;
    const gramsOfBeverage = this.state.gramsOfBeverage;
    this.setState({gramsOfBeverage: e.target.value});
    this.setState({gramsCoffee: (e.target.value / brewRatio)});
  }
  render() {
    const brewOption = this.state.brewOption;
    const brewRatio = this.state.brewRatio;
    const gramsOfBeverage = this.state.gramsOfBeverage;
    const gramsCoffee = this.state.gramsCoffee;
    let brewStrengthChoices = null;
    let beverageGramsInput = null;
    let resultCoffeeInGrams = null;
    if(brewOption !== 'none') {
      brewStrengthChoices =  <div className="row m-4">
        <h3 className="col-xs-2">How strong would you like your coffee?</h3>
        <svg className="row" height="100" width="100vw">
          <circle className="col-xs-2" onClick={this.handleDarkClick} cx="50" cy="50" r="40" stroke="#969696" strokeWidth="1" fill="#4d3626" />
          <circle className="col-xs-2" onClick={this.handleMediumClick} cx="150" cy="50" r="40" stroke="#969696" strokeWidth="1" fill="#6f4e37" />
          <circle className="col-xs-2" onClick={this.handleLightClick} cx="250" cy="50" r="40" stroke="#969696" strokeWidth="1" fill="#916648" />
        </svg>
      </div>
    }

    if(brewRatio !== 'none') {
      beverageGramsInput = <div className="m-4">
        <div className="row">
          <h3 className="col-xs-12">How many grams of water are you using?</h3>
        </div>

        <div className="row">
          <div className="col-xs-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Amount of final beverage" value={gramsOfBeverage} onChange={e => this.updateGramsOfBeverage(e)} />
              <div className="input-group-append">
                <span className="input-group-text">grams</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    }

    if(gramsOfBeverage !== 0) {
      resultCoffeeInGrams = <h2>Ground Coffee {gramsCoffee} grams</h2>
    }

    return (
      <div>
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
        </div>
        <BrewOptions brewOption={brewOption} brewRatio={brewRatio} />
        {brewStrengthChoices}
        {beverageGramsInput}
        {resultCoffeeInGrams}
      </div>
    )
  }
}

export default BrewMethods;