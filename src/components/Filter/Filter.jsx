import { useThemeContext } from '../../context/theme'
import * as S from './style'

function Filter() {
    const {theme } = useThemeContext()

    return (
        <div>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <S.FilterButton >исполнителю</S.FilterButton>
            <S.FilterButton>году выпуска</S.FilterButton>
            <S.FilterButton>жанру</S.FilterButton>
        </div>
    )
}
export default Filter
