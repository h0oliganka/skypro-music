import * as S from '../mainFolder/main.styled'
import * as L from './login.styled'

export const Login = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <L.CenterBlock>
          <L.CenterBlockItem>

              <L.LogoImage src="img/logo.png" alt="logo" />


            <L.InputItem type="text" placeholder="Почта" />

            <L.InputItem type="password" placeholder="Пароль" />

            <button className="button">Войти</button>

            <button>Зарегистрироваться</button>
          </L.CenterBlockItem>
        </L.CenterBlock>
      </S.Container>
    </S.Wrapper>
  )
}
