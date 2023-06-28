import React from "react";
import "./Humidity.css";

const Humidity = () => {
  return (
    <>
      <div className="card">
        <div className="card__header">
          <h4>Humidity</h4>
          <div className="card__header__right">
            <span class="material-icons-outlined">water_drop</span>
          </div>
        </div>
        <div className="card__heading">
          <h3 className="card__title">82%</h3>
          <span className="card__para">bad</span>
        </div>

        <div className="card__ranges">
          <div>
            <span className="card__ranges__title">good</span>
            <div className="card__range">
              <div className="range__fill__good"></div>
            </div>
          </div>
          <div>
            <span className="card__ranges__title">normal</span>
            <div className="card__range">
              <div className="range__fill__normal"></div>
            </div>
          </div>
          <div>
            <span className="card__ranges__title">bad</span>
            <div className="card__range">
              <div className="range__fill__title"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Humidity;
