import { Link } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../../context/user'
import { registerUser, loginUser } from '../../api/user';

export default function AuthPage({ isLoginMode = false }) {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const navigate = useNavigate();
    const [buttonDisableStatus, setButtonDisableStatus] = useState(false);
    const { setIsLoggedIn } = useUserContext();

    const handleLogin = async ({ email, password }) => {
        setButtonDisableStatus(true);
        if (password == false || email == false) {
            setError('Укажите почту/пароль');
            setButtonDisableStatus(false);
        } else {
            loginUser({ email, password })
                .then((response) => {
                    localStorage.setItem('user', JSON.stringify(response));
                    setButtonDisableStatus(false);
                    setIsLoggedIn(JSON.parse(localStorage.getItem('user')));
                    navigate('/');
                })
                .catch((error) => {
                    setError(error.message);
                    setButtonDisableStatus(false);
                });
        }
    };

    const handleRegister = async () => {
        setButtonDisableStatus(true);
        if (password !== repeatPassword) {
            setError('Пароли должны совпадать');
            setButtonDisableStatus(false);
        } else if (password == false || email == false) {
            setError('Укажите почту/пароль');
            setButtonDisableStatus(false);
        } else {
            registerUser({ email, password })
                .then((response) => {
                    localStorage.setItem('user', JSON.stringify(response));
                    setButtonDisableStatus(false);
                    navigate('/login');
                })
                .catch((error) => {
                    setError(error.message);
                    setButtonDisableStatus(false);
                });
        }
    };

    // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
    useEffect(() => {
        setError(null);
    }, [isLoginMode, email, password, repeatPassword]);

    return (
        <S.PageContainer>
            <S.ModalForm>
                <Link to="/login">
                    <S.ModalLogo>
                        <S.ModalLogoImage src="/img/logoBlack.png" alt="logo" />
                    </S.ModalLogo>
                </Link>
                {isLoginMode ? (
                    <>
                        <S.Inputs>
                            <S.ModalInput
                                type="text"
                                name="login"
                                placeholder="Почта"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                            <S.ModalInput
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </S.Inputs>
                        {error && <S.Error>{error}</S.Error>}
                        <S.Buttons>
                            <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                                Войти
                            </S.PrimaryButton>
                            <Link to="/register">
                                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
                            </Link>
                        </S.Buttons>
                    </>
                ) : (
                    <>
                        <S.Inputs>
                            <S.ModalInput
                                type="text"
                                name="login"
                                placeholder="Почта"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                            <S.ModalInput
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                            <S.ModalInput
                                type="password"
                                name="repeat-password"
                                placeholder="Повторите пароль"
                                value={repeatPassword}
                                onChange={(event) => {
                                    setRepeatPassword(event.target.value);
                                }}
                            />
                        </S.Inputs>
                        {error && <S.Error>{error}</S.Error>}
                        <S.Buttons>
                            <S.PrimaryButton
                                onClick={handleRegister}
                                disabled={buttonDisableStatus}
                            >
                                Зарегистрироваться
                            </S.PrimaryButton>
                        </S.Buttons>
                    </>
                )}
            </S.ModalForm>
        </S.PageContainer>
    );
}
