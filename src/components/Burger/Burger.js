import * as S from "./style";

import NavMenu from "../NavMenu/NavMenu";
import React from "react";

import { useState} from 'react';


function Burger() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
    return (
      <div>
        <S.NavBurger onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <S.BurgerLine />
        <S.BurgerLine/>
        <S.BurgerLine />
      </S.NavBurger>
      {isOpenMenu && <NavMenu />}
      </div>
    );
  }
  export default Burger;