import React from 'react'
import './RainCard.css'

const RainCard = () => {
  return (
    <>
    <div className="card">
        <div className="card__header">
          <h4>Feels like</h4>
          <div className="card__header__right">
            <span class="material-icons-outlined">beach_access</span>
          </div>
        </div>
        <div className="card__heading">
          <h3 className="card__title">
            42%
          </h3>
        </div>

        <div className="card__ranges__temp">
          <div className="tempcard__titles">
            <div>
              <p>
                0%
              </p>
            </div>

            <div>
              <p>
                25%
              </p>
            </div>

            <div>
              <p>
                50%
              </p>
            </div>
            <div>
              <p>
                75%
              </p>
            </div>
            <div>
              <p>
                100%
              </p>
            </div>
          </div>
          <div className="tempcard__range">
            <div className="tempcard__fill"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RainCard
