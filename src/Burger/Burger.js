import * as S from "./style";
import NavMenu from "../NavMenu/NavMenu";

const { useState } = React;

function Burger() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleVisibility = () => {
    setIsOpenMenu(!isOpenMenu);
  };
    return (
      <div>
        <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine />
        <S.BurgerLine/>
        <S.BurgerLine />
      </S.NavBurger>
      {isOpenMenu && <NavMenu />}
      </div>
    );
  }
  export default Burger;