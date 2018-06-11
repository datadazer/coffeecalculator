import React, { Component } from 'react';
const BrewOptions = (props) => {
  const brewOption = props.brewOption;
  if (brewOption == 'aeropress') {
    return <h3>Aeropress selected</h3>;
  } else if (brewOption == 'chemex') {
    return <h3>Chemex selected</h3>;
  } else if (brewOption == 'pourOver') {
    return <h3>Pour over selected</h3>;
  } else if (brewOption == 'frenchPress') {
    return <h3>French Press selected</h3>;
  } else if (brewOption == 'drip') {
    return <h3>Drip selected</h3>;
  }
  return null;
}

export default BrewOptions;