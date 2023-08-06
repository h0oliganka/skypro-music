import Skeleton from '../skelet/skelet'
import React from 'react'
import * as S from './sidebar.styled'

export function Sidebar({ loading }) {
  return (
    <div>
      {loading ? (
        <S.MainSidebar>
          <S.SidebarPersonal>
            <S.SidebarAvatar src="/img/outsvg.svg" alt="out" />
          </S.SidebarPersonal>
          <S.SidebarBlock>
            <S.SidebarList>
              <S.SidebarItem>
                <S.SidebarLink href="/#">
                  <Skeleton width="250px" height="150px" />
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink href="/#">
                  <Skeleton width="250px" height="150px" />
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink href="/#">
                  <Skeleton width="250px" height="150px" />
                </S.SidebarLink>
              </S.SidebarItem>
            </S.SidebarList>
          </S.SidebarBlock>
        </S.MainSidebar>
      ) : (
        <S.MainSidebar>
          <S.SidebarPersonal>
            <S.SidebarAvatar src="/img/outsvg.svg" alt="out" />
          </S.SidebarPersonal>
          <S.SidebarBlock>
            <S.SidebarList>
              <S.SidebarItem>
                <S.SidebarLink to="/playlistOfTheDay">
                  <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink to="/danceHits">
                  <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink to="/indieCharge">
                  <S.SidebarImg src="img/playlist03.png" alt="day's playlist" />
                </S.SidebarLink>
              </S.SidebarItem>
            </S.SidebarList>
          </S.SidebarBlock>
        </S.MainSidebar>
      )}
    </div>
  )
}
