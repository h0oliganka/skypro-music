import { useState } from 'react'
import React from 'react'
import filterAuthor from './filterAuthor'

function Search() {
  const [visibleFilter, setVisibleFilter] = useState(null)

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  return (
    <>
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="centerblock__filter_item"></div>
        <div>
          <button
            onClick={() => {
              toggleVisibleFilter('author')
            }}
            value="author"
            type="button"
            className={
              visibleFilter === 'author'
                ? 'filter__button button-author _btn-text button__active'
                : 'filter__button button-author _btn-text'
            }
          >
            исполнителю
          </button>
          {visibleFilter === 'author' && <filterAuthor />}
        </div>
        <button className="filter__button button-year _btn-text">
          году выпуска
        </button>
        <button className="filter__button button-genre _btn-text">жанру</button>
      </div>
    </>
  )
}

export default Search
