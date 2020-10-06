import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from'./components/weather';
import Form from './components/form';
//weather icons from github
import 'weather-icons/css/weather-icons.css';

//api call
const API_KEY ="9cc7ea72eeaf8485db3d56b504ef29a0";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city:undefined,
      lat:undefined,
      long:undefined,
      country:undefined,
      icon: undefined,
      main:undefined,
      celsius:undefined,
      fahrenheit: undefined,
      temp_max:undefined,
      temp_min:undefined,
      description :"",
      error: false
    };
  

    this.weatherIcon = {
      Thunderstorm : "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog"
    };
  }
  
  calCelsius(temp){
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  calFar(temp){
    let cell = Math.floor(temp - 273.15);
    let far = cell + 32;
    return far;

  }

  get_WeatherIcon(icons, rangeID){
    switch(true){
      case rangeID >= 200 && rangeID <= 232:
      this.setState({icon:this.weatherIcon.Thunderstorm});
      break;
      case rangeID >= 300 && rangeID <= 321:
      this.setState({icon:this.weatherIcon.Drizzle});
      break;
      case rangeID >= 500 && rangeID <= 531:
      this.setState({icon:this.weatherIcon.Rain});
      break;
      case rangeID >= 600 && rangeID <= 622:
      this.setState({icon:this.weatherIcon.Snow});
      break;
      case rangeID >= 701 && rangeID <= 781:
      this.setState({icon:this.weatherIcon.Atmosphere});
      break;
      case rangeID >= 800 && rangeID <= 800:
      this.setState({icon:this.weatherIcon.Clear});
      break;
      case rangeID >= 801 && rangeID <= 804:
      this.setState({icon:this.weatherIcon.Clouds});
      break;
      default:
        this.setState({icon:this.weatherIcon.Clouds});
    }
  }
  getWeather = async(e) =>{

    e.preventDefault();

    const lat = e.target.elements.lat.value;
    console.log(lat)
    const long = e.target.elements.long.value;
    console.log(long)

    if(lat&&long){
    const api_call = await fetch(
      // `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`
      );

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city : response.timezone,
      description: response.current.weather[0].description,
      celsius : this.calCelsius(response.current.temp),
      fahrenheit : this.calFar(response.current.temp),
      // celsius : this.calCelsius(response.main.temp),
      // fahrenheit : this.calFar(response.main.temp),
      // temp_max: this.calCelsius(response.main.temp_max),
      // temp_min : this.calCelsius(response.main.temp_min),
      // description: response.weather[0].description,
      // visibility: response.visibility,
      mainW: response.current.weather[0].main,

      
      
    });
    this.get_WeatherIcon(this.weatherIcon, response.current.weather[0].id);

    console.log(response);
    }else{
      this.setState({error:true})
    }

  };

  render(){
    return(
      <div className="App">
        <Form loadweather={this.getWeather} error = {this.state.error}/>
        <Weather 
        // city={this.state.city}
        // country={this.state.country}
        // temp_celsius = {this.state.celsius}
        // temp_far = {this.state.fahrenheit}
        // temp_max = {this.state.temp_max}
        // temp_min = {this.state.temp_min}
        // description = {this.state.description}
        // visibility = {this.state.visibility}
        temp_cel = {this.state.celsius}
        temp_far = {this.state.fahrenheit}
         weatherIcon = {this.state.icon}
        city={this.state.city}
        mainW={this.state.mainW}
        description={this.state.description}

        />
      </div>
    );
  }

}



export default App;
