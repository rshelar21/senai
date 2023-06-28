import React from "react";
import "./RightPanel.css";
import Humidity from "../HumidityCard/Humidity";
import Wind from "../WindCard/Wind";
import Percipation from "../percipation/Percipation";
import Uv from "../UV/Uv";
import Tempcard from "../TempCard/Tempcard";
import RainCard from "../ChangeOfRain/RainCard";
import ChartArea from "../Chart/Chart";


const RightPanel = () => {




  return (
    <>
      <div className="container__panel">
        <div className="panel__header">
          <div>
            <h4>Welcome back Isabella!</h4>
            <p>Check out today's weather information</p>
          </div>

          <div className="panel__header__right">
            <span class="material-icons-outlined">more_horiz</span>
            <img
              src="https://i0.wp.com/www.mobileworldlive.com/wp-content/uploads/2018/03/Mark-Zuckerberg-Facebook-CEO.jpg?fit=650%2C433&ssl=1"
              alt="user-img"
              className="user__img"
            />
          </div>
        </div>

        <div className="panel__chart">
          <div className="chart__header">
            <p>Upcoming hours</p>

            <div className="tags__sections">
              <div className="tags">
                Rain precipitation
                <span class="material-icons">expand_more</span>
              </div>

              <div className="tags" style={{ color: "black" }}>
                Next days
                <span class="material-icons">expand_more</span>
              </div>
            </div>
          </div>

          <div>
            <ChartArea/>
          </div>
        </div>

        <div className="weather__details">
          <h4>More details of today's weather</h4>

          <div className="weather__cards">
            <Humidity />
            <Wind />
            <Percipation />
            <Uv />
            <Tempcard />
            <RainCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default RightPanel;
