import React from 'react'
import { Bar } from '../components/barFolder/bar'
import { Content } from '../components/contentFolder/content'
import { Nav } from '../components/navFolder/nav'
import { Search } from '../components/searchFolder/search'
import { Sidebar } from '../components/sidebarFolder/sidebar'
import * as S from './main.styled'
import { useEffect, useState } from 'react'
import { getTrack } from '../../api/track'
import { Playlist } from '../components/playlistFolder/playlist'
import { PlaylistSkelet } from '../components/playlistFolder/playlistSkelet'
import { useSelector } from 'react-redux'
import { useGetTracksQuery } from '../store/services'

export function Main({ setActivTrack }) {
  const { data } = useGetTracksQuery();
  const [isPlaying, setIsPlaying] = useState(true)
  const [loading, setLoading] = useState(true)
  const [tracks, setTrackList] = useState([])
  const [newApiError, setNewApiError] = useState(null)
  const currentTrack = useSelector((store) => store.AudioPlayer.currentTrack);
  useEffect(() => {
    getTrack()
      .then((tracks) => {
        setTrackList(tracks)
      })
      .catch((error) => {
        setNewApiError(error.message)
      }).finally(() => {
        setLoading(false)
      })
  }, [])
  console.log(tracks)

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <S.MainCenterblock>
            <Search tracks={tracks} />
            <Content loading={loading} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setActivTrack={setActivTrack} />
            {newApiError ? <p>Не удалось загрузить данные</p> : null}
            {loading ? (
              <PlaylistSkelet />
            ) : (
              <Playlist data={data} loading={loading} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setActivTrack={setActivTrack} />
            )}
          </S.MainCenterblock>
          <Sidebar loading={loading} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setActivTrack={setActivTrack} />
        </S.Main>
        {currentTrack && (
          <S.Bar>
            <Bar currentTrack={currentTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
          </S.Bar>
        )}
        <footer></footer>
      </S.Container>
    </S.Wrapper>
  )
}
