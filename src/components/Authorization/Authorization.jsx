import { useEffect } from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { usePostLoginMutation } from '../../servises/serv'
import * as S from './style'

export const Authorization = ({ user, onAuthButtonClick }) => {
    const logRef = useRef(null)
    const passRef = useRef(null)
    let log = {
        email: 'avraa00@mail.ru',
        password: 'string',
    }
    function logBec(logRef, passRef) {
        onAuthButtonClick()
        if (logRef !== '' && passRef !== '') {
            log.username = logRef
            log.password = passRef
            login(log)
        }
    }

    const [login, { isLoading }] = usePostLoginMutation()
    return (
        <S.WindowLogIn>
            <S.Input ref={logRef} placeholder="Логин" type="text"></S.Input>
            <S.Input
                ref={passRef}
                placeholder="Пароль"
                type="password"
            ></S.Input>
            <NavLink to="/content">
                <S.ButtonLogIn onClick={logBec(logRef, passRef)}>
                    <S.LinkText>Войти</S.LinkText>{' '}
                </S.ButtonLogIn>
            </NavLink>
            <NavLink to="/registration">
                <S.Registration>
                    <S.RegistrationText>Зарегистрироватся</S.RegistrationText>{' '}
                </S.Registration>
            </NavLink>
        </S.WindowLogIn>
    )
}
