import { useThemeContext } from '../../context/theme'
import * as S from './style'

function TrackPlay(params) {
    const { theme } = useThemeContext()

    return (
        <S.TrackPlayClass  name={params.name}>
            <S.TrackPlay_Link style={{color:theme.color, textDecoration:'none'}} name={params.aName} href="http://">
                {params.text}
            </S.TrackPlay_Link>
        </S.TrackPlayClass>
    )
}
export default TrackPlay
