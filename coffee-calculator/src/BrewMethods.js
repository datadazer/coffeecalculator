import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const BrewMethods = () => {
  const selectBrewMethod = () => {
    // do stuff
  }
  return (
    <div className="row justify-content-around">
      <div className="col-xs-2 m-4">
        <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/1627/2455/t/1/assets/icon-brewguide-aeropress.svg"></img>
      </div>
      <div className="col-xs-2 m-4">
        <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/1627/2455/t/1/assets/icon-brewguide-chemex.svg"></img>
      </div>
      <div className="col-xs-2 m-4">
        <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/1627/2455/t/1/assets/icon-brewguide-pourover.svg"></img>
      </div>
      <div className="col-xs-2 m-4">
        <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/1627/2455/t/1/assets/icon-brewguide-frenchpress.svg"></img>
      </div>
      <div className="col-xs-2 m-4">
        <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/1627/2455/t/1/assets/icon-brewguide-drip.svg"></img>
      </div>
    </div>
  );
}

export default BrewMethods;