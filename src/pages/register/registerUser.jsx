import * as S from '../mainFolder/main.styled'
import * as R from '../register/register.styled'

export const RegisterUser = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <R.CenterBlock>
          <R.CenterBlockItem>
            <R.LogoImage>
              <R.LogoImageItem src="/img/logoBlack.png" alt="logo" />
            </R.LogoImage>
            <R.InputBlock>
              <R.InputBlockItem type="text" placeholder="Почта" />

              <R.InputBlockItem type="password" placeholder="Пароль" />

              <R.InputBlockItem
                type="password"
                placeholder="Повторите пароль"
              />
            </R.InputBlock>
            <div>
              <R.ButtonRegister to="/">Зарегистрироваться</R.ButtonRegister>
            </div>
          </R.CenterBlockItem>
        </R.CenterBlock>
      </S.Container>
    </S.Wrapper>
  )
}
