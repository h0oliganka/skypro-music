import React from 'react'
import Skeleton from '../skelet/skelet'
import * as S from './playlist.styled'
import { tracks } from '../data/data'

export function Playlist({ loading }) {
  return (
    <S.ContentPlaylist>
    {loading ? (

<S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music" />
              </S.TrackTitleImg>
              <>
                <S.TrackTitleLink href="http://">
                  <Skeleton width="356px" height="19px" />
                  <S.TrackTitleSpan />
                </S.TrackTitleLink>
              </>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                <Skeleton width="271px" height="19px" />
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                <Skeleton width="305px" height="19px" />
              </S.TrackAlbumLink>
            </S.TrackAlbum>
          </S.PlaylistTrack>
          <br></br>
        </S.PlaylistItem>
) : (
      {tracks.map((track) => (
        <S.PlaylistItem key={track.id}>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImg>
              <>
                <S.TrackTitleLink href="http://">
                  {track.title} <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>
            </S.TrackAlbum>

            <S.TrackTimeSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText> {track.time} </S.TrackTimeText>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}


      )}
    </S.ContentPlaylist>
  )
}
