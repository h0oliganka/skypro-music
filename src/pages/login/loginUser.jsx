import * as S from '../mainFolder/main.styled'
import * as L from './login.styled'

export const Login = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <L.CenterBlock>
          <L.CenterBlockItem>
            <div>
              <L.LogoImage src="../img/logoBlack.png" alt="logo" />
            </div>
            <div>
              <L.InputItem type="text" placeholder="Почта" />
            </div>
            <div>
              <L.InputItem type="password" placeholder="Пароль" />
            </div>
            <div>
              <L.ButtonEnter to="/main">Войти</L.ButtonEnter>
            </div>
            <div>
              <L.ButtonRegister to="/register_user">
                Зарегистрироваться
              </L.ButtonRegister>
            </div>
          </L.CenterBlockItem>
        </L.CenterBlock>
      </S.Container>
    </S.Wrapper>
  )
}
