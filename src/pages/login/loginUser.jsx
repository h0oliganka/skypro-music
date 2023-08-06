import * as S from '../mainFolder/main.styled'
import * as L from './login.styled'

export const Login = ({ user, onAuthButtonClick }) => {
  const activeClassName = 'underline'

  return (
    <S.Wrapper>
      <S.Container>
        <L.CenterBlock>
          <L.CenterBlockItem>
            <L.LogoImage>
              <L.LogoImageItem src="/img/logoBlack.png" alt="logo" />
            </L.LogoImage>
            <L.InputBlock>
              <L.InputItem type="username" placeholder="Почта" />

              <L.InputItem type="password" placeholder="Пароль" />
            </L.InputBlock>
            <L.ButtonBlock>
              <L.ButtonEnter
                to="/"
                className={({ isActive }) =>
                  cn(<S.Wrapper/>, {
                    [activeClassName]: isActive,
                  })
                }
              >
                Войти
              </L.ButtonEnter>

              <L.ButtonRegister to="/register">
                Зарегистрироваться
              </L.ButtonRegister>
            </L.ButtonBlock>
          </L.CenterBlockItem>
        </L.CenterBlock>
      </S.Container>
    </S.Wrapper>
  )
}
