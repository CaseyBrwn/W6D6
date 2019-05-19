import React from "react";

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentWeather: null
        }

    }

    cordinates(pos){
        let currentLocation = pos.coords;
        let lat = currentLocation.latitude;
        let lng = currentLocation.lng;
        Weather(lat, lng);
    }

    weather(lat, lng){
        let currentWeather = api.openweathermap.org / data / 2.5 / weather ? lat = { lat } & lon={ lon }
    }

    


    location() {
     navigator.geolocation.getCurrentPosition(cordinates(position));
    }

    componentDidMount(){
        this.location();
    }


    render(){

        return(

        )
    }


}


export default Weather;