import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { usePostSignupMutation } from '../../servises/serv'
import * as S from './style'

const user = {
    username: 'string',
    email: 'avraa00@mail.ru',
    password: 'string',
}
export const RegistrationWindow = ({}) => {
    const logRef = useRef(null)
    const passRef = useRef(null)
    const repPassRef = useRef(null)
    const [signup, { isLoading }] = usePostSignupMutation()

    function reg(log, pas, repPas) {
        if (
            log.value !== '' &&
            pas.value === repPas.value &&
            pas.value !== ''
        ) {
            user.username = log
            user.password = pas
            signup(user)
            console.log(user)
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
            <NavLink to="/">
                <S.Registration onClick={reg(logRef, passRef, repPassRef)}>
                    <S.RegistrationText>Зарегистрироватся</S.RegistrationText>{' '}
                </S.Registration>
            </NavLink>
        </S.WindowLogIn>
    )
}
