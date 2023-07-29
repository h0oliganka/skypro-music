import React from 'react'
import { Bar } from '../barFolder/bar'
import { Content } from '../contentFolder/content'
import { Nav } from '../navFolder/nav'
import { Search } from '../searchFolder/search'
import { Sidebar } from '../sidebarFolder/sidebar'
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
