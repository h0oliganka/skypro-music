import * as S from '../mainFolder/main.styled'
import { Nav } from '../components/navFolder/nav'
import { TrackList } from './trackList'
import { Bar } from '../components/barFolder/bar'
import * as M from './myTracks.styled'
import { NavLink } from 'react-router-dom'

export const MyTracks = ({ loading, activTrack, isPlaying, setIsPlaying, setActivTrack }) => {
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
            <M.Centerblockh2>Мои треки</M.Centerblockh2>
            <TrackList loading={loading} activTrack={activTrack} />
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
        <Bar loading={loading} activTrack={activTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setActivTrack={setActivTrack} />
      </S.Container>
    </S.Wrapper>
  )
}
