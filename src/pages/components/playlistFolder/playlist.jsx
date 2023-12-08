import React from 'react'
import * as S from './playlist.styled'
import { useDispatch, useSelector } from 'react-redux';
import { crateTrackList, setCurrentTrack } from '../../store/creators';
import { useAddLikeMutation, useRemoveLikeMutation } from '../../store/services';


export function Playlist({ data = [] }) {
  const pageType = useSelector((store) => store.AudioPlayer.currentPage);
  const [addLike] = useAddLikeMutation();
  const [removeLike] = useRemoveLikeMutation();
  const userId = JSON.parse(localStorage.getItem('user')).id;
  const dispatch = useDispatch();

  return (
    <S.ContentPlaylist>
      {data.map((track) => (
        <S.PlaylistItem key={track.id}>
          <S.PlaylistTrack>
            <S.TrackTitle onClick={() => {
              dispatch(setCurrentTrack(track));
              dispatch(crateTrackList(data));
            }}>
              <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImg>
              <>
                <S.TrackTitleLink>
                  {track.name}{' '} <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
            </S.TrackAlbum>

            <S.TrackTimeSvg alt="time" onClick={() => {
              pageType === 'myTracks' ? removeLike(track.id) :
                track.stared_user.some((user) => user['id'] === userId)
                  ? removeLike(track.id)
                  : addLike(track.id);
            }}>
              {pageType === 'myTracks' ? (
                <use xlinkHref="img/icon/sprite.svg#icon-activ-like"></use>
              ) : track.stared_user.some((user) => user['id'] === userId) ? (
                <use xlinkHref="img/icon/sprite.svg#icon-activ-like"></use>
              ) : (
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              )}
            </S.TrackTimeSvg>
            <S.TrackTimeText> {track.duration_in_seconds} </S.TrackTimeText>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </S.ContentPlaylist>
  )
}
