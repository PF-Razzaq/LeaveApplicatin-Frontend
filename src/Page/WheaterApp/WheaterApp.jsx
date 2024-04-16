import React from "react";
import "./WheaterApp.css";
import { IoIosSearch } from "react-icons/io";
import { TiWeatherSunny } from "react-icons/ti";

const WheaterApp = () => {
  return (
    <>
      <div className="containers">
        <div className="weather">
          <div className="search">
            <input type="text" placeholder="Enter Your City" />
            <button>
              <span>
                {" "}
                <IoIosSearch />
              </span>
            </button>
          </div>
          <div className="w-info">
            <span className="icon">
              <TiWeatherSunny />
            </span>
            <h1>
              22<sup>o</sup>C
            </h1>
            <h2>London</h2>
          </div>
          <div className="detail">
            <div className="col">
              <img src="" alt="" />
              <div className="humidity">
                <p>20%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="" alt="" />
              <div className="wind">
                <p>2 k/ms</p>
                <p>Wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WheaterApp;
