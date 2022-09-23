import * as S from "./style";

import { AppRoutes } from "../../routes";


function Content() {


  return (
    <S.Wrapper>
      <S.Container>
        <AppRoutes user={true}/>
      </S.Container>
    </S.Wrapper>
  );
}
export default Content;
