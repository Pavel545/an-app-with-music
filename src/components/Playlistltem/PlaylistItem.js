import * as S from "./style";

function Item() {
  return(
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
    return (
      <S.PlaylistItem>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
            <div className="track__title-text">
              <S.TrackTitleLink href="http://">
                {props.name} <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </div>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">
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
    );
  }
export default Item;
  