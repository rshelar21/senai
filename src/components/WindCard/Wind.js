import React from "react";
import "./Wind.css";

const Wind = () => {
  return (
    <>
      <div className="card__wind">
        <div className="card__header__wind">
          <h4>Humidity</h4>
          <div className="card__header__right">
            <span class="material-icons-outlined">air</span>
          </div>
        </div>

        <div className="wind__speed">
          <div className="speed__box">
            <div className="speed__box__indicate"></div>
            <div className="speed__box__title">8 km/h</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wind;
