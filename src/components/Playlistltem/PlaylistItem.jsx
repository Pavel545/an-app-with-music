import { useThemeContext } from '../../context/theme'
import * as S from './style'

function Item() {
    return (
        <S.ContentPlaylist>
            <PlaylistItem
                name="Guilt"
                executor="Nero"
                album="Welcome Reality"
                time="4:44"
            />
            <PlaylistItem
                name="Elektro"
                executor="Dynoro, Outwork, Mr. Gee"
                album="Elektro"
                time="2:22"
            />
            <PlaylistItem
                name="I’m Fire"
                executor="Ali Bakgor"
                album="I’m Fire"
                time="2:22"
            />
            <PlaylistItem
                name="Non Stop"
                executor="Стоункат, Psychopath"
                album="Non Stop"
                time="4:12"
            />
            <PlaylistItem
                name="Run Run"
                executor="Jaded, Will Clarke, AR/CO"
                album="Run Run"
                time="2:54"
            />
            <PlaylistItem
                name="Eyes on Fire"
                executor="Blue Foundation, Zeds Dead"
                album="Eyes on Fire"
                time="5:20"
            />
            <PlaylistItem
                name="Mucho Bien"
                executor="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
                album="Mucho Bien"
                time="3:41"
            />
            <PlaylistItem
                name="Knives n Cherries"
                executor="minthaze"
                album="Captivating"
                time="1:48"
            />
            <PlaylistItem
                name="How Deep Is Your Love"
                executor="Calvin Harris, Disciples"
                album="How Deep Is Your Love"
                time="3:32"
            />
            <PlaylistItem
                name="Morena"
                executor="Tom Boxer"
                album="Soundz Made in Romania"
                time="3:36"
            />
            <PlaylistItem
                name="Morena"
                executor="Tom Boxer"
                album="Soundz Made in Romania"
                time="3:36"
            />
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
