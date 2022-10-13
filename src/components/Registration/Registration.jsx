import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { SKY_PRO_BACK_SIGNUP } from '../constans/constants'
import request from '../Request/request'
import * as S from './style'


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
                url: SKY_PRO_BACK_SIGNUP + user,
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
