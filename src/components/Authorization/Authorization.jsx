import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { usePostLoginMutation } from '../../servises/serv'
import * as S from './style'

export const Authorization = ({onAuthButtonClick }) => {

    const logRef = useRef(null)
    const passRef = useRef(null)
    const log = {
        username: 'string',
        email: 'avraa00@mail.ru',
        password: 'string',
    }
    const logBec = () => {
        if (logRef !== '' && passRef !== '') {
            const inputLogin = logRef.current;
            const inputPassword = passRef.current;

            log.username = inputLogin.value 
            log.password = inputPassword.value
            
            onAuthButtonClick(log)
            
        }
        
        

    }
    

    return (
        <S.WindowLogIn>
            <S.Input ref={logRef} placeholder="Логин" type="text"></S.Input>
            <S.Input
                ref={passRef}
                placeholder="Пароль"
                type="password"
            ></S.Input>
            <NavLink to="/content">
                <S.ButtonLogIn onClick={logBec}>
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
