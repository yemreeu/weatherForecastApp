import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";



function Info(props) {
  const { info, state } = props;
  return (
    <div>
        {
            state ?
            <div className="info">
              <p id="city">
                {info.name}, {info.sys.country}
              </p>
              <div className="value">
                <p id="temperature">{Math.ceil(info.main.temp)}  <span><TbTemperatureCelsius /></span></p>
                
              </div>
              <p>{info.weather[0].description}</p>
              <p id="felt-temperature"> Feels like : {Math.ceil(info.main.feels_like)} <span><TbTemperatureCelsius /></span></p> 
            </div> : null
        }
    </div>
  );
}

export default Info;
