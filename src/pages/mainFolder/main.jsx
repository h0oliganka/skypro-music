import React from 'react'
import { Bar } from '../components/barFolder/bar'
import { Content } from '../components/contentFolder/content'
import { Nav } from '../components/navFolder/nav'
import { Search } from '../components/searchFolder/search'
import { Sidebar } from '../components/sidebarFolder/sidebar'
import * as S from './main.styled'
import { useEffect, useState } from 'react'
import { getTrack } from '../api'

export function Main() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [loading, setLoading] = useState(true);
  const [activTrack, setActivTrack] = useState(null);
  const [tracks, setTrackList] = useState([]);
  const loadingBoot = () => setLoading(!loading)
  useEffect(() => {
    getTrack()
      .then((tracks) => {
        setTrackList(tracks);
        setLoading(false);
      });
    setTimeout(loadingBoot, 2000);
  }, []);
  console.log(tracks)

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <S.MainCenterblock>
            <Search />
            <Content loading={loading} activTrack={activTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setActivTrack={setActivTrack} />
          </S.MainCenterblock>
          <Sidebar loading={loading} />
        </S.Main>
        <Bar />
        <footer></footer>
      </S.Container>
    </S.Wrapper>
  )
}
