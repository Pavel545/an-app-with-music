import * as S from './style'
import * as SB from '../Sidebar/style.js'

function Element() {
    return (
        <S.PlaylistItem>
            <S.SidebarImg src="img/loading/Loading.png"></S.SidebarImg>
        </S.PlaylistItem>
    )
}

export function LoadingPly() {
    return (
        <S.ContentPlaylist>
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
        </S.ContentPlaylist>
    )
}
export function LoadingBar() {
    return (
        <S.PlaylistItem>
            <S.SidebarImg src="img/loading/LoadTrack.png"></S.SidebarImg>
        </S.PlaylistItem>
    )
}

export function SidebarLoad() {
    return (
        <SB.MainSidebar>
            <SB.SidebarPersonal>
                <SB.SidebarPersonalName>Sergey.Ivanov</SB.SidebarPersonalName>
                <SB.SidebarAvatar></SB.SidebarAvatar>
            </SB.SidebarPersonal>
            <SB.SidebarBlock>
                <SB.SidebarList>
                    <SB.SidebarItem>
                        <SB.SidebarLink href="#">
                            <SB.SidebarImg
                                src="img/loading/SibebarLoad.png"
                                alt="day's playlist"
                            />
                        </SB.SidebarLink>
                    </SB.SidebarItem>
                    <SB.SidebarItem>
                        <a className="sidebar__link" href="#">
                            <SB.SidebarImg
                                src="img/loading/SibebarLoad.png"
                                alt="day's playlist"
                            />
                        </a>
                    </SB.SidebarItem>
                    <SB.SidebarItem>
                        <a className="sidebar__link" href="#">
                            <SB.SidebarImg
                                src="img/loading/SibebarLoad.png"
                                alt="day's playlist"
                            />
                        </a>
                    </SB.SidebarItem>
                </SB.SidebarList>
            </SB.SidebarBlock>
        </SB.MainSidebar>
    )
}
