import { useEffect } from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import request from '../Request/request'
import * as S from './style'

const skyproBeck = 'http://51.250.95.23:8000/user/login/'

export const Authorization = ({ user, onAuthButtonClick }) => {
    const logRef = useRef(null)
    const passRef = useRef(null)
    let log ={
        "email": "string",
        "password": "string"
    }
    function logBec(logRef,passRef) {
        onAuthButtonClick()
        log.username = logRef
        log.password = passRef

            
      }
      
    return (
        <S.WindowLogIn>
            <S.Input ref={logRef} placeholder="Логин" type={`text`}></S.Input>
            <S.Input ref={passRef} placeholder="Пароль" type={'password'}></S.Input>

            <S.ButtonLogIn onClick={logBec(logRef,passRef)}>
                <NavLink to="/content">
                    <S.LinkText>Войти</S.LinkText>{' '}
                </NavLink>
            </S.ButtonLogIn>
            <S.Registration>
                <NavLink to="/registration" >
                    <S.RegistrationText>Зарегистрироватся</S.RegistrationText>{' '}
                </NavLink>
            </S.Registration>
        </S.WindowLogIn>
    )
}
