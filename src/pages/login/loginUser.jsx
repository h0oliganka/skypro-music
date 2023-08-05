import * as S from '../mainFolder/main.styled'
import * as L from './login.styled'

export const Login = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <L.CenterBlock>
          <L.CenterBlockItem>
            <L.LogoImage>
              <L.LogoImageItem src="../img/logoBlack.png" alt="logo" />
            </L.LogoImage>
            <L.InputBlock>
              <L.InputItem type="text" placeholder="Почта" />

              <L.InputItem type="password" placeholder="Пароль" />
            </L.InputBlock>
            <L.ButtonBlock>
              <L.ButtonEnter to="/">Войти</L.ButtonEnter>

              <L.ButtonRegister to="/register_user">
                Зарегистрироваться
              </L.ButtonRegister>
            </L.ButtonBlock>
          </L.CenterBlockItem>
        </L.CenterBlock>
      </S.Container>
    </S.Wrapper>
  )
}
