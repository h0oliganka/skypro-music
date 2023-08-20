import * as S from '../mainFolder/main.styled'
import * as L from './login.styled'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();
  const addToken = () => {
    localStorage.setItem('Token', '{bef4a505-d547-4bfa-8a66-67cea0dd1b79}');
    navigate('/');
  };

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
                onClick={addToken}
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
