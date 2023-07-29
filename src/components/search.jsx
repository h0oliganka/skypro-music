import { useState } from 'react'
import React from 'react'
import { FilterAuthor } from './filterAuthor'
import { FilterGenre } from './filterGenre'
import { FilterYear } from './filterYear'

export function Search() {
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
        <div className="centerblock__filter_item">

          <div className="centerblock__filter_item">
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
            {visibleFilter === 'author' && <FilterAuthor />}
          </div>

          <div className="centerblock__filter_item">
            <button
              onClick={() => {
                toggleVisibleFilter('year')
              }}
              value="year"
              type="button"
              className={
                visibleFilter === 'year'
                  ? 'filter__button button-year _btn-text button__active'
                  : 'filter__button button-year _btn-text'
              }
            >
              году выпуска
            </button>
            {visibleFilter === 'year' && <FilterYear />}
          </div>

          <div className="centerblock__filter_item">
            <button
              onClick={() => {
                toggleVisibleFilter('genre')
              }}
              value="genre"
              type="button"
              className={
                visibleFilter === 'genre'
                  ? 'filter__button button-genre _btn-text button__active'
                  : 'filter__button button-genre _btn-text'
              }
            >
              жанру
            </button>
            {visibleFilter === 'genre' && <FilterGenre />}
          </div>
        </div>
      </div>
    </>
  )
}
