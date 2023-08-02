import React from 'react'
import { Playlist } from '../playlistFolder/playlist'
import * as S from './content.styled'

export function Content({ loading }) {
  return (
    <S.CenterBlockContent>
      <S.ContentTitle>
        <S.PlaylistTitlecol01>Трек</S.PlaylistTitlecol01>
        <S.PlaylistTitlecol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitlecol02>
        <S.PlaylistTitlecol03>АЛЬБОМ</S.PlaylistTitlecol03>
        <S.PlaylistTitlecol04>
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </S.PlaylistTitleSvg>
        </S.PlaylistTitlecol04>
      </S.ContentTitle>
      <Playlist loading={loading} />
    </S.CenterBlockContent>
  )
}