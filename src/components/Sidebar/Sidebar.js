import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="container__sidebar">
        <div className="siderbar__body">
          <div className="header">
            <div>
              <span class="material-icons md-light">add_box</span>
            </div>

            <div className="header__slider">
              <span className="slider__one" />
              <span className="slider__two" />
              <span className="slider__three" />
            </div>

            <div className="header__right">
              <span className="temp">
                <sup>o</sup>C
              </span>
              <div className="range__body">
                <span className="range__dot" />
              </div>
              <span className="temp">
                <sup>o</sup>F
              </span>
            </div>
          </div>

          <div className="wheather__body">
            <div className="wheather__box">
              <div className="wheather__header">
                <span className="material-icons-outlined" id="send__icons">
                  send
                </span>
                <span className="wheather__city">New York, USA</span>
              </div>

              <div className="wheather__right">
                <span class="material-icons-outlined" id="sunset_icons">
                  wb_twilight
                </span>
                <span className="wheather__time">07:19</span>
              </div>
            </div>

            <div className="wheather__box">
              <div className="wheather__header">
                <span className="wheather__date ">Today 28 Sept</span>
              </div>

              <div className="wheather__right">
                <span class="material-icons-outlined" id="sunset_icons">
                  wb_twilight
                </span>
                <span className="wheather__time">07:19</span>
              </div>
            </div>
          </div>

          <div className="temp__body">
            <span class="material-icons-outlined" id="arrows">arrow_back_ios</span>
            <div>
                <h1 className="temp__num">27 <sup className="deg">o</sup></h1>
            </div>
            <span class="material-icons-outlined" id="arrows">arrow_forward_ios</span>
          </div>
        </div>


        <div className="poster__body">
            <img src="/assets/b2.png" alt="" 
            className="poster__img"
            />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
