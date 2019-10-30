import React, { Component } from "react";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import "./App.css";

// weather app api ID
const API_KEY = "a0b06c5081206c201648b8f3fb6d6fc6";
class App extends Component {
  // undefined empty states to use
 state = {
      tempreture: {
        currentTemp: undefined,
        maxTemp: undefined,
        minTemp: undefined,
        icon: undefined
      },
      city: undefined,
      country: undefined,
      humidty: undefined,
      description: undefined,
      error: undefined
    };


  getWeather = async e => {
    e.preventDefault();
    // City value
    const city = e.target.elements.city.value;
    // Country Value
    const country = e.target.elements.country.value;
    // calling the  API
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    // Make the data fetched from the api as content
    const data = await api_call.json();
    console.log(data); 
    // if the user input gets matches an api 
    if (city && country) {
      this.setState({
        tempreture: {
          // Get the weather in celius by minusing it in kalvens
          currentTemp: (data.main.temp - 273).toFixed(2),
          minTemp: (data.main.temp_min - 273).toFixed(2),
          maxTemp: (data.main.temp_max - 273).toFixed(2)
        },
        // get city name
        city: data.name,
        // get country name
        country: data.sys.country,
        // get the humidity
        humidity: data.main.humidity,
        // get the weather description
        description: data.weather[0].description,
        error: "",
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      });
      // if not
    } else {
      this.setState({
        tempreture: {
          currentTemp: undefined,
          maxTemp: undefined,
          minTemp: undefined,
          icon: undefined
        },
        city: undefined,
        country: undefined,
        humidty: undefined,
        description: undefined,
        error: "Please Enter values"
      });
    }
    console.log(this.state.tempreture);
    console.log(this.state.city);
    console.log(this.state.humidity);
  };

  render() {
    return (

        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
              <div className="col-xs-7 form-container">
                    <Form
                    // get weather data
                      getWeather={this.getWeather}
                    />
                   
                  </div>
                <div className="col-xs-5 title-container">
                <Weather
                // props sent to weather for use
                      currentTempreture={this.state.tempreture.currentTemp}
                      minTempreture={this.state.tempreture.minTemp}
                      maxTempreture={this.state.tempreture.maxTemp}
                      humidity={this.state.humidity}
                      city={this.state.city}
                      country={this.state.country}
                      description={this.state.description}
                      error={this.state.error}
                      icon={this.state.icon}
                    />


                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
