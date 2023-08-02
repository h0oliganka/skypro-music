import React from 'react'
import { Bar } from '../components/barFolder/bar'
import { Content } from '../components/contentFolder/content'
import { Nav } from '../components/navFolder/nav'
import { Search } from '../components/searchFolder/search'
import { Sidebar } from '../components/sidebarFolder/sidebar'
import * as S from './main.styled'

export function Main({ loading }) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <S.MainCenterblock>
            <Search />
            <Content loading={loading} />
          </S.MainCenterblock>
          <Sidebar loading={loading} />
        </S.Main>
        <Bar />
        <footer></footer>
      </S.Container>
    </S.Wrapper>
  )
}
