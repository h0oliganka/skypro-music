import { useState } from 'react'
import React from 'react'

function Nav() {
  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => setVisible(!visible)

  function toggleVisibilityDown(e) {
    if (e.keyCode === 13) {
      toggleVisibility()
    }
  }

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <button
        tabIndex={0}
        onClick={toggleVisibility}
        onKeyDown={toggleVisibilityDown}
        className="nav__burger burger"
      >
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </button>
      {visible && (
        <div className="nav__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Мой плейлист
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Войти
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Nav
