import React, { useState } from "react";
import axios from "axios";

function Form(props) {
    const {setInfo,setState} = props;
  const [city, setCity] = useState("");

//   useEffect(() => {
//     console.log(info);
//   }, [info]);

  const  handleChange = async() => {
    const api = "6ecec1a22258a06be3fc8f9a4a8b6c34";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
    await axios(url).then(res => setInfo(res.data));
    setState(true);
   
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChange();
          
        }}
      >
        <div className="form">
          <input
          value = {city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            className="inputText"
            type="text"
            placeholder="Please type the city name"
          />
        </div>
        <div className="btnDiv">
          <button type="submit" className="btn">
            Bring the weather forecast
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
