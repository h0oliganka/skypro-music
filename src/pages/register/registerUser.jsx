import * as S from '../mainFolder/main.styled'
import * as R from '../register/register.styled'

export const RegisterUser = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <R.CenterBlock>
          <R.CenterBlockItem>
            <div>
              <R.LogoImage src="../img/logoBlack" alt="logo" />
            </div>
            <div>
              <R.InputItem type="text" placeholder="Почта" />
            </div>
            <div>
              <R.InputItem type="password" placeholder="Пароль" />
            </div>
            <div>
              <R.InputItem type="password" placeholder="Повторите пароль" />
            </div>
            <div>
              <R.ButtonRegister to="/main">Зарегистрироваться</R.ButtonRegister>
            </div>
          </R.CenterBlockItem>
        </R.CenterBlock>
      </S.Container>
    </S.Wrapper>
  )
}
