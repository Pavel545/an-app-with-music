import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import request from '../Request/request'
import * as S from './style'

const skyproBeck = 'http://51.250.95.23:8000/user/signup/'

const user = {
    username: 'string',
    email:'avraa00@mail.ru',
    password: 'string',
}
export const RegistrationWindow = ({}) => {
    const logRef = useRef(null)
    const passRef = useRef(null)
    const repPassRef = useRef(null)

    function reg(log, pas, repPas) {
        if (
            log.value !== '' &&
            pas.value === repPas.value &&
            pas.value !== ''
        ) {
            user.username = log
            user.password = pas

            request({
                method: 'POST',
                url: skyproBeck + user,
                onSuccess: (event) => {
                    console.log(event)
                },
            })
        }
    }
    return (
        <S.WindowLogIn>
            <S.Input ref={logRef} placeholder="Логин" type={`text`}></S.Input>
            <S.Input
                ref={passRef}
                placeholder="Пароль"
                type={'password'}
            ></S.Input>
            <S.Input
                ref={repPassRef}
                placeholder="Повторите пароль"
                type={'password'}
            ></S.Input>

            <S.Registration onClick={reg(logRef, passRef, repPassRef)}>
                <NavLink to="/">
                    <S.RegistrationText>Зарегистрироватся</S.RegistrationText>{' '}
                </NavLink>
            </S.Registration>
        </S.WindowLogIn>
    )
}
