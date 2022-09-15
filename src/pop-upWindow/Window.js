import * as S from "./style";

export function YearWindow() {
  return (
    <S.WindowYear>
      <input type="radio" name="elem" value="1" checked></input>
      <input type="radio" name="elem" value="2"></input>
    </S.WindowYear>
  );
}
export function AuthorWindow() {
  return <S.Window></S.Window>;
}
export function GenreWindow() {
  return <S.Window></S.Window>;
}
