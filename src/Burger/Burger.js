import React from "react";
import NavMenu from "../NavMenu/NavMenu";

const { useState } = React;

function Burger() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleVisibility = () => {
    console.log(1);
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div>
      <div className="nav__burger burger" onClick={toggleVisibility}>
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      {isOpenMenu && <NavMenu />}
    </div>
  );
}
export default Burger;
