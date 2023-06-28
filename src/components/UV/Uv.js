import React from "react";
import "./Uv.css";

const Uv = () => {
  return (
    <>
      <div className="card">
        <div className="card__header">
          <h4>UV index</h4>
          <div className="card__header__right">
            <span class="material-icons-outlined">wb_sunny</span>
          </div>
        </div>
        <div className="card__heading">
          <h3 className="card__title">4</h3>
          <span className="card__para">medium</span>
        </div>

        <div className="card__ranges__uv">
          <div>
            <span className="card__ranges__title">0-2</span>
            <div className="card__range">
              <div className="uv__fill__good"></div>
            </div>
          </div>
          <div>
            <span className="card__ranges__title">3-5</span>
            <div className="card__range">
              <div className="uv__fill__normal"></div>
            </div>
          </div>
          <div>
            <span className="card__ranges__title">6-7</span>
            <div className="card__range">
              {/* <div className="range__fill__title"></div> */}
            </div>
          </div>
          <div>
            <span className="card__ranges__title">8-10</span>
            <div className="card__range">
              {/* <div className="range__fill__title"></div> */}
            </div>
          </div>
          <div>
            <span className="card__ranges__title">11+</span>
            <div className="card__range">
              {/* <div className="range__fill__title"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Uv;
