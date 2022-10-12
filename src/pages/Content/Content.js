import * as S from "./style";

import { AppRoutes } from "../../routes";

import {ThemeContext, themes} from "../../context/theme"
import { useState } from "react";

function Content() {
  const [currentTheme, setCurrentTheme] =useState(themes.dark)

  

  const toggleTheme =()=>{
    if(currentTheme === themes.dark){
      setCurrentTheme(themes.light);
      return;
    }
    setCurrentTheme(themes.dark)
  }

  return (
    <ThemeContext.Provider value={{theme : currentTheme, toggleTheme}}>
      <S.Wrapper>
      <S.Container  >
        <AppRoutes user={false}/>
      </S.Container>
    </S.Wrapper>
    </ThemeContext.Provider>
  );
}
export default Content;
