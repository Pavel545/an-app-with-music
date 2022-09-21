import * as S from './style'

function TrackPlay(params) {
    return (
        <S.TrackPlayClass name={params.name}>
            <S.TrackPlay_Link name={params.aName} href="http://">
                {params.text}
            </S.TrackPlay_Link>
        </S.TrackPlayClass>
    )
}
export default TrackPlay
