import { useEffect } from 'react'
import { useThemeContext } from '../../context/theme'
import * as S from './style'

function Item(props) {
    console.log(props.mass)

    return (
        <S.ContentPlaylist>
            {props.mass.map((element, index) => (
                <PlaylistItem
                    key={index}
                    name={element.name}
                    executor={element.author}
                    album={element.album}
                    time={element.duration_in_seconds}
                />
            ))}
        </S.ContentPlaylist>
    )
}
function PlaylistItem(props) {
    const { theme } = useThemeContext()
    return (
        <S.PlaylistItem>
            <S.PlaylistTrack>
                <S.TrackTitle>
                    <S.TrackTitleImage style={{ background: theme.colorIcon }}>
                        <S.TrackTitleSvg alt="music">
                            <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 15.751V1.72067L19 0.750977V12.751"
                                    stroke={theme.color}
                                />
                                <ellipse
                                    cx="4.5"
                                    cy="15.751"
                                    rx="3.5"
                                    ry="2"
                                    stroke={theme.color}
                                />
                                <ellipse
                                    cx="15.5"
                                    cy="12.751"
                                    rx="3.5"
                                    ry="2"
                                    stroke={theme.color}
                                />
                            </svg>
                        </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <div className="track__title-text">
                        <S.TrackTitleLink
                            style={{ color: theme.color }}
                            href="http://"
                        >
                            {props.name} <S.TrackTitleSpan />
                        </S.TrackTitleLink>
                    </div>
                </S.TrackTitle>
                <S.TrackAuthor>
                    <S.TrackAuthorLink
                        style={{ color: theme.color }}
                        href="http://"
                    >
                        {props.executor}
                    </S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                    <S.TrackAlbumLink href="http://">
                        {props.album}
                    </S.TrackAlbumLink>
                </S.TrackAlbum>
                <div className="track__time">
                    <S.TrackTimeSvg alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>{props.time}</S.TrackTimeText>
                </div>
            </S.PlaylistTrack>
        </S.PlaylistItem>
    )
}
export default Item
