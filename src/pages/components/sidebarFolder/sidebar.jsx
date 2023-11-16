import Skeleton from '../skelet/skelet'
import React from 'react'
import * as S from './sidebar.styled'
import { useUserContext } from '../../../context/user'
import { NavLink } from 'react-router-dom';

export function Sidebar({ loading }) {
  const { isLoggedIn } = useUserContext();
  console.log(isLoggedIn);
  const logOut = () => {
    localStorage.clear();
  };
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
            <S.SidebarPersonalName className="sidebar__personal-name">
              {isLoggedIn.username}
            </S.SidebarPersonalName>
            <NavLink to="/login">
              <S.SidebarAvatar src="/img/outsvg.svg" alt="out" onClick={logOut} />
            </NavLink>
          </S.SidebarPersonal>
          <S.SidebarBlock>
            <S.SidebarList>
              <S.SidebarItem>
                <S.SidebarLink to="/category/1">
                  <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink to="/category/2">
                  <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink to="/category/3">
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
