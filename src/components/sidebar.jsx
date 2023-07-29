import Skeleton from '../skelet/skelet'
import React from 'react'

export function Sidebar({ loading }) {
  return (
    <div>
      {loading ? (
        <div className="main__sidebar sidebar">
          <div className="sidebar__personal">
            <p className="sidebar__personal-name">h0oliganka</p>
            <div className="sidebar__avatar"></div>
          </div>
          <div className="sidebar__block">
            <div className="sidebar__list">
              <div className="sidebar__item">
                <a className="sidebar__link" href="/#">
                  <Skeleton width="250px" height="150px" />
                </a>
              </div>
              <div className="sidebar__item">
                <a className="sidebar__link" href="/#">
                  <Skeleton width="250px" height="150px" />
                </a>
              </div>
              <div className="sidebar__item">
                <a className="sidebar__link" href="/#">
                  <Skeleton width="250px" height="150px" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="main__sidebar sidebar">
          <div className="sidebar__personal">
            <p className="sidebar__personal-name">h0oliganka</p>
            <div className="sidebar__avatar"></div>
          </div>
          <div className="sidebar__block">
            <div className="sidebar__list">
              <div className="sidebar__item">
                <a className="sidebar__link" href="/#">
                  <img
                    className="sidebar__img"
                    src="img/playlist01.png"
                    alt="day's playlist"
                  />
                </a>
              </div>
              <div className="sidebar__item">
                <a className="sidebar__link" href="/#">
                  <img
                    className="sidebar__img"
                    src="img/playlist02.png"
                    alt="day's playlist"
                  />
                </a>
              </div>
              <div className="sidebar__item">
                <a className="sidebar__link" href="/#">
                  <img
                    className="sidebar__img"
                    src="img/playlist03.png"
                    alt="day's playlist"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
