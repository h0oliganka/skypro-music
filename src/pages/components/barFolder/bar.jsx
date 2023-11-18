import React from 'react'
import * as S from './bar.styled'
import { useRef, useState, useEffect } from 'react'
import {
  nextTrack,
  pauseTrack,
  playTrack,
  prevTrack,
  setRepeatState,
  shuffleTracks,
} from '../../store/creators'
import { useSelector, useDispatch } from 'react-redux'
import { currentTrackIdSelector } from '../../store/selectors'

export function Bar({ isPlaying, setIsPlaying, activTrack }) {
  const [isRepeat, setIsRepeat] = useState(false)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const tracks = useSelector((store) => { store.AudioPlayer.trackList });
  const shuffledTrackList = useSelector((store) => { store.AudioPlayer.shuffledTrackList });;
  const currentTrack = useSelector((store) => { store.AudioPlayer.currentTrack });
  const playingStatus = useSelector((store) => { store.AudioPlayer.playing });
  const shuffleStatus = useSelector((store) => { store.AudioPlayer.shuffled });
  const audioComponentRef = useRef(null);
  const getCurrentTrackList = () => {
    if (shuffleStatus === false) {
      return tracks;
    } else {
      return shuffledTrackList;
    }
  };

  const currentTrackList = getCurrentTrackList();
  const currentTrackId = useSelector(currentTrackIdSelector);
  const currentTrackIndex = currentTrackList.findIndex(
    (currentTrack) => currentTrack.id === currentTrackId,
  );
  const dispatch = useDispatch();
  const nextTrackToggle = () => {
    if (currentTrackIndex < tracks.length - 1) {
      dispatch(nextTrack(currentTrackList[currentTrackIndex + 1]));
      dispatch(playTrack(true));
    } else {
      console.log('Exit from if else');
    }
  };
  const prevTrackToggle = () => {
    if (currentTime < 5) {
      if (currentTrackIndex >= 1) {
        dispatch(prevTrack(currentTrackList[currentTrackIndex - 1]));
        dispatch(playTrack(true));
      } else {
        console.log('Exit from if else');
      }
    } else {
      const ref = audioComponentRef.current;
      ref.currentTime = 0;
    }
  };
  const playClick = () => {
    if (playingStatus) {
      audioComponentRef.current.pause();
      dispatch(pauseTrack(true));
    } else {
      audioComponentRef.current.play();
      dispatch(playTrack(true));
    }
  };
  const repeatClick = () => {
    audioComponentRef.current.loop = !isRepeat;
    dispatch(setRepeatState(!isRepeat));
  };
  const volumeOnChange = (event) => {
    const newVolume = audioComponentRef.current.volume;
    setVolume(newVolume);
    audioComponentRef.current.volume = event.target.value;
  };
  const timeOnChange = (event) => {
    audioComponentRef.current.currentTime = event.target.value;
  };

  const shuffleToggle = () => {
    if (shuffleStatus === false) {
      dispatch(shuffleTracks(true, [...tracks].sort(() => Math.random() - 0.5)));
    } else {
      dispatch(shuffleTracks(false, []));
    }
  };
  useEffect(() => {
    const ref = audioComponentRef.current;

    const timeUpdate = () => {
      if (ref.currentTime && ref.duration) {
        setCurrentTime(ref.currentTime);
        setDuration(ref.duration);
      } else {
        setCurrentTime(0);
        setDuration(0);
      }
    };
    ref.addEventListener('timeupdate', timeUpdate);

    return () => {
      ref.removeEventListener('timeupdate', timeUpdate);
    };
  });
  return (
    <S.Bar>
      <S.BarContent>
        <S.Timer>
          {Math.trunc(currentTime / 60) < 10
            ? '0' + Math.trunc(currentTime / 60)
            : Math.trunc(currentTime / 60)}
          :
          {Math.trunc(currentTime % 60) < 10
            ? '0' + Math.trunc(currentTime % 60)
            : Math.trunc(currentTime % 60)}
          /
          {Math.trunc(duration / 60) < 10
            ? '0' + Math.trunc(duration / 60)
            : Math.trunc(duration / 60)}
          :
          {Math.trunc(duration % 60) < 10
            ? '0' + Math.trunc(duration % 60)
            : Math.trunc(duration % 60)}
        </S.Timer>
        <S.AudioComponent
          controls
          src={activTrack.track_file}
          ref={audioComponentRef}
          autoPlay
        ></S.AudioComponent>
        <S.StyledProgressInput
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={timeOnChange}
          $color="#ff0000"
        />
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev" onClick={prevTrackToggle}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg
                  className="_btn"
                  alt="play"
                  onClick={playClick}
                >
                  {playingStatus ? (
                    <use xlinkHref="/img/icon/sprite.svg#icon-pause"></use>
                  ) : (
                    <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                  )}
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.BtnNext>
                <S.PlayerBtnNextSvg alt="next" onClick={nextTrackToggle}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.BtnNext>
              <S.PlayerBtnRepeat className="_btn-icon" onClick={repeatClick}>
                <S.BtnRepeatSvg
                  className="player__btn-repeat-svg"
                  alt="repeat"
                  $isRepeat={isRepeat}
                >
                  <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                </S.BtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle className="_btn-icon">
                <S.PlayerBtnShuffleSvg alt="shuffle" onClick={shuffleToggle}
                  $shuffleStatus={shuffleStatus}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink href="http://">
                    {currentTrack.name}
                  </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  <S.TrackPlayAlbumLink href="http://">
                    {currentTrack.author}
                  </S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike className="_btn-icon">
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike className="_btn-icon">
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.VolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress className="_btn">
                <S.VolumeProgressLine
                  className="_btn"
                  type="range"
                  name="range"
                  value={volume}
                  min={0}
                  max={1}
                  step={0.01}
                  onChange={volumeOnChange}
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.VolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
