import { useEffect } from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import request from '../Request/request'
import * as S from './style'

export const Authorization = ({ user, onAuthButtonClick }) => {
    const logRef = useRef(null)
    const passRef = useRef(null)
    const log = {
        email: 'string',
        password: 'string',
    }
    function logBec(logRef, passRef) {
        onAuthButtonClick()
        log.username = logRef
        log.password = passRef
    }

    return (
        <S.WindowLogIn>
            <S.Input ref={logRef} placeholder="Логин" type="text"></S.Input>
            <S.Input
                ref={passRef}
                placeholder="Пароль"
                type="password"
            ></S.Input>

            <S.ButtonLogIn onClick={logBec(logRef, passRef)}>
                <NavLink to="/content">
                    <S.LinkText>Войти</S.LinkText>{' '}
                </NavLink>
            </S.ButtonLogIn>
            <S.Registration>
                <NavLink to="/registration">
                    <S.RegistrationText>Зарегистрироватся</S.RegistrationText>{' '}
                </NavLink>
            </S.Registration>
        </S.WindowLogIn>
    )
}
