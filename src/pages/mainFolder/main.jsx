import React from 'react'
import { Bar } from '../components/barFolder/bar'
import { Content } from '../components/contentFolder/content'
import { Nav } from '../components/navFolder/nav'
import { Search } from '../components/searchFolder/search'
import { Sidebar } from '../components/sidebarFolder/sidebar'
import * as S from './main.styled'
import { useEffect, useState } from 'react'
import { getTrack } from '../api'
import { Playlist } from '../components/playlistFolder/playlist'
import { PlaylistSkelet } from '../components/playlistFolder/playlistSkelet'

export function Main() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [loading, setLoading] = useState(true)
  const [activTrack, setActivTrack] = useState(null)
  const [tracks, setTrackList] = useState([])
  const [newApiError, setNewApiError] = useState(null)
  useEffect(() => {
    getTrack()
      .then((tracks) => {
        setTrackList(tracks)
        setLoading(false)
      })
      .catch((error) => {
        setNewApiError(error.message)
      })
  }, [])
  console.log(tracks)

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <S.MainCenterblock>
            <Search />
            <Content loading={loading} activTrack={activTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setActivTrack={setActivTrack} />
            <Playlist loading={loading} activTrack={activTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setActivTrack={setActivTrack} />
          </S.MainCenterblock>
          <Sidebar loading={loading} activTrack={activTrack} />
        </S.Main>
        <S.Bar>
          {activTrack ? (
            <Bar
              activTrack={activTrack}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          ) : null}
        </S.Bar>
        <footer></footer>
      </S.Container>
    </S.Wrapper>
  )
}
