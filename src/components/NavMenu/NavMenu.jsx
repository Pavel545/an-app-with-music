import * as S from './style'

function NavMenu() {
    return (
        <S.NavMenu>
            <S.MenuList>
                <S.MenuItem>
                    <S.menuLink href="http://">Главное</S.menuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.menuLink href="http://">Мой плейлист</S.menuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.menuLink href="http://">Войти</S.menuLink>
                </S.MenuItem>
            </S.MenuList>
        </S.NavMenu>
    )
}
export default NavMenu
