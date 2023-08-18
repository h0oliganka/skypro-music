import React from 'react'
import { Bar } from '../components/barFolder/bar'
import { Content } from '../components/contentFolder/content'
import { Nav } from '../components/navFolder/nav'
import { Search } from '../components/searchFolder/search'
import { Sidebar } from '../components/sidebarFolder/sidebar'
import * as S from './main.styled'
import { useEffect, useState } from 'react'

export function Main() {
  const [loading, setLoading] = useState(true)
  const loadingBoot = () => setLoading(!loading)
  useEffect(() => {
    setTimeout(loadingBoot, 2000)
  }, [])

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
