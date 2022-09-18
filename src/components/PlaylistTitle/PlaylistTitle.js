import * as S from "./style";

function PlaylistTitle() {
  return (
    <S.ContentTitle>
      <S.PlaylistTitleCol number="1">Трек</S.PlaylistTitleCol>
      <S.PlaylistTitleCol number="2">ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol>
      <S.PlaylistTitleCol number="3">АЛЬБОМ</S.PlaylistTitleCol>
      <S.PlaylistTitleCol number="4">
        <S.PlaylistTitleSvg alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch" />
        </S.PlaylistTitleSvg>
      </S.PlaylistTitleCol>
    </S.ContentTitle>
  );
}
export default PlaylistTitle;
