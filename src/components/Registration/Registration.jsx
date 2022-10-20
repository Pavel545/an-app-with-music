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
    const [signup, { isLoading }] = usePostSignupMutation()
    const logRef = useRef(null)
    const passRef = useRef(null)
    const repPassRef = useRef(null)

    function reg() {
        const inputLog = logRef.current
        const inputPass = passRef.current
        const inputRepPass = repPassRef.current

        if (
            inputLog.value !== '' &&
            inputPass.value === inputRepPass.value &&
            inputPass.value !== ''
        ) {
            user.username = inputLog.value
            user.password = inputPass.value
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
                <S.Registration onClick={reg}>
                    <S.RegistrationText>Зарегистрироватся</S.RegistrationText>{' '}
                </S.Registration>
            </NavLink>
        </S.WindowLogIn>
    )
}
