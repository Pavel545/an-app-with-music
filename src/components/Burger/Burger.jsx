import * as S from './style'

import NavMenu from '../NavMenu/NavMenu'
import React from 'react'

import { useState } from 'react'
import { useThemeContext } from '../../context/theme'

function Burger() {
    const {theme } =useThemeContext()
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    return (
        <div>
            <S.NavBurger style={{color: theme.color}} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                <S.BurgerLine />
                <S.BurgerLine />
                <S.BurgerLine />
            </S.NavBurger>
            {isOpenMenu && <NavMenu />}
        </div>
    )
}
export default Burger
