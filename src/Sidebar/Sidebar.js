import * as S from "./style";


function Sidebar() {
    return (
      <S.MainSidebar>
        <S.SidebarPersonal>
          <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
          <S.SidebarAvatar></S.SidebarAvatar>
        </S.SidebarPersonal>
        <S.SidebarBlock>
          <S.SidebarList>
            <S.SidebarItem>
              <S.SidebarLink href="#">
                <S.SidebarImg
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </S.SidebarLink >
            </S.SidebarItem>
            <S.SidebarItem>
              <a className="sidebar__link" href="#">
                <S.SidebarImg
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              </a>
            </S.SidebarItem>
            <S.SidebarItem>
              <a className="sidebar__link" href="#">
                <S.SidebarImg
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              </a>
            </S.SidebarItem>
          </S.SidebarList>
        </S.SidebarBlock>
      </S.MainSidebar>
    );
  }
export default  Sidebar;