import * as S from "./style";

import Main from '../../components/Main/Main';
import Bar from '../../components/Bar/Bar';


function Content() {
  return (
    <S.Wrapper>
      <S.Container>
        <Main />
        <Bar />
      </S.Container>
    </S.Wrapper>
  );
}
export default Content;
