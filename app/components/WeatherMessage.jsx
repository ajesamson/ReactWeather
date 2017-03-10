var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <h3 clsssName="text-center">It is {temp} in {location}</h3>
  );
}

module.exports = WeatherMessage;
