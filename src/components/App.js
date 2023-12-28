
import React from "react";
import './../styles/App.css';

const App = () => {
  const weatherInput = {temperature:25,conditions:"Sunny"};
  const thresholdTemperature = 20;
  
  function getColourOnTemperature(temperature){
    return temperature>thresholdTemperature?"red":"blue";
  }

  let color="";
  function displayWeatherReport(weatherInput){
    color = getColourOnTemperature(weatherInput.temperature);
  }


  displayWeatherReport(weatherInput);

  return (
    <div>
      <p style={{color:color}}>Temperature:{weatherInput.temperature}</p>
      <p style={{color:color}}>Conditions:{weatherInput.conditions}</p>
    </div>
  )
}

export default App;
