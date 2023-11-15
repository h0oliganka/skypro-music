import * as S from './filter.styled'


export function FilterGenre() {
  return (
    <S.CenterBlockFilterItemText>
      {tracks.map((track) => (
        <S.FiltersButton key={track.id}>
          {track.genre}
        </S.FiltersButton>
      ))}
    </S.CenterBlockFilterItemText>
  )
}
