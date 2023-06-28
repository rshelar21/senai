import React from "react";
import "./Percipation.css";


const Percipation = () => {
  return (
    <>
      <div className="perci__card">
        <div className="card__header">
          <h4>Humidity</h4>
          <div className="card__header__right">
          <span class="material-icons-outlined">thunderstorm</span>
          </div>
        </div>

        <div className="card__heading">
          <h3 className="card__title">1.4</h3>
          <h3 className="card__title">cm</h3>
        </div>

        <div className="card__ranges__precipation">
          <div>
            <span className="card__ranges__title">0</span>
            <div className="precipaton__range">
              <div className="precipaton__fill__good"></div>
            </div>
          </div>
          <div>
            <span className="card__ranges__title">10</span>
            <div className="precipaton__range">
              <div className="precipaton__fill__normal"></div>
            </div>
          </div>
          <div>
            <span className="card__ranges__title">20</span>
            <div className="precipaton__range">
              <div className="precipaton__fill__title"></div>
            </div>
          </div>
          <div>
            <span className="card__ranges__title">30</span>
            <div className="precipaton__range">
              <div className="precipaton__fill__title"></div>
            </div>
          </div>
          <div>
            <span className="card__ranges__title">40</span>
            <div className="precipaton__range">
              <div className="precipaton__fill__title"></div>
            </div>
          </div>
          <div>
            <span className="card__ranges__title">50</span>
            <div className="precipaton__range">
              <div className="precipaton__fill__title"></div>
            </div>
          </div>
          <div>
            <span className="card__ranges__title">60</span>
            <div className="precipaton__range">
              <div className="precipaton__fill__title"></div>
            </div>
          </div>
          <div>
            <span className="card__ranges__title">70</span>
            <div className="precipaton__range">
              <div className="precipaton__fill__title"></div>
            </div>
          </div>
          <div>
            <span className="card__ranges__title">70</span>
            <div className="precipaton__range">
              <div className="precipaton__fill__title"></div>
            </div>
          </div>
          <div>
            <span className="card__ranges__title">80</span>
            <div className="precipaton__range">
              <div className="precipaton__fill__title"></div>
            </div>
          </div>
          <div>
            <span className="card__ranges__title">90</span>
            <div className="precipaton__range">
              <div className="precipaton__fill__title"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Percipation;
