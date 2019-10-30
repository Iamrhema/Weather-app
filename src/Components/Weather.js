import React from "react";

const Weather = props => (
  <div className="weather__info">
    {// weather tempreture
    props.icon && (
      <span id="temp" className="weather__value">
        {props.currentTempreture} &#8451;
      </span>
    )}
    {// weather icon
    props.icon && (
      <img style={{ margin: "5px" }} src={props.icon} alt="waether icon" />
    )}
    {//  weather location country and city
    props.city && props.country && (
      <p className="weather__key">
        {" "}
        Location:
        <span className="weather__value">
          {" "}
          {props.city}, {props.country}
        </span>
      </p>
    )}

    {//  humidity
    props.humidity && (
      <p className="weather__key">
        {" "}
        Humidity:
        <span className="weather__value"> {props.humidity}%</span>
      </p>
    )}

    {// weather conditions
    props.description && (
      <p className="weather__key">
        {" "}
        Conditions:
        <span className="weather__value"> {props.description} </span>
      </p>
    )}

    {//  if error
    props.error && <p className="weather__error">{props.error}</p>}
  </div>
);

export default Weather;
