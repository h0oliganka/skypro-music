import React from 'react'
import * as M from '../myTracks/myTracks.styled'
import * as S from '../mainFolder/main.styled'
import { Nav } from '../components/navFolder/nav'
import { TrackList } from '../myTracks/trackList'
import { Bar } from '../components/barFolder/bar'
import { NavLink } from 'react-router-dom'

export function PlaylistOfTheDay({ loading }) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <M.MainCenterblock>
            <M.CenterblockSearch>
              <M.SearchSvg>
                <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
              </M.SearchSvg>
              <M.SearchText type="search" placeholder="Поиск" name="search" />
            </M.CenterblockSearch>
            <M.Centerblockh2>Плейлист дня</M.Centerblockh2>
            <TrackList loading={loading} />
          </M.MainCenterblock>
          <S.SidebarPersonal>
            <S.SidebarPersonalName className="sidebar__personal-name">
              {currentUser.username}
            </S.SidebarPersonalName>
            <NavLink to="/login">
              <S.SidebarAvatar src="/img/outsvg.svg" alt="out" onClick={logOut} />
            </NavLink>
          </S.SidebarPersonal>
        </S.Main>
        <Bar />
      </S.Container>
    </S.Wrapper>
  )
}