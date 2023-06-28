import React from "react";
import "./Tempcard.css";

const Tempcard = () => {
  return (
    <>
      <div className="card">
        <div className="card__header">
          <h4>Feels like</h4>
          <div className="card__header__right">
            <span class="material-icons-outlined">thermostat</span>
          </div>
        </div>
        <div className="card__heading">
          <h3 className="card__title">
            30
            <sup>o</sup>
          </h3>
        </div>

        <div className="card__ranges__temp">
          <div className="tempcard__titles">
            <div>
              <p>
                0<sup>o</sup>
              </p>
            </div>

            <div>
              <p>
                25<sup>o</sup>
              </p>
            </div>

            <div>
              <p>
                50<sup>o</sup>
              </p>
            </div>
          </div>
          <div className="tempcard__range">
            <div className="tempcard__fill"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tempcard;
