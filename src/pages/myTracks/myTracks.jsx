import * as S from '../mainFolder/main.styled'
import { Nav } from '../components/navFolder/nav'
import { Content } from '../components/contentFolder/content'
import { Bar } from '../components/barFolder/bar'
import * as M from './myTracks.styled'

export const MyTracks = ({ loading }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <M.MainCenterblock>
            <M.CenterblockSearch>
              <M.SearchSvg>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </M.SearchSvg>
              <M.SearchText type="search" placeholder="Поиск" name="search" />
            </M.CenterblockSearch>
            <M.Centerblockh2>Мои треки</M.Centerblockh2>
            <Content loading={loading} />
          </M.MainCenterblock>
          <M.SidebarPersonal>
            <M.SidebarPersonalName>h0oliganka</M.SidebarPersonalName>
            <M.SidebarAvatar alt="out">
              <use xlinkHref="../img/outsvg.svg"></use>
            </M.SidebarAvatar>
          </M.SidebarPersonal>
        </S.Main>
        <Bar />
      </S.Container>
    </S.Wrapper>
  )
}
