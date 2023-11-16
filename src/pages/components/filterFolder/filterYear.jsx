import * as S from './filter.styled'


export function FilterYear({tracks}) {
  return (
    <S.CenterBlockFilterItemText className="centerblock__filter_item_text">
      {tracks.map((track) => (
        <S.FiltersButton key={track.id}>
          {track.release_date}
        </S.FiltersButton>
      ))}
    </S.CenterBlockFilterItemText>
  )
}
