import * as S from './style'

import Search from '../Search/Search'
import Sidebar from '../Sidebar/Sidebar'
import Burger from '../Burger/Burger'
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import React from 'react'
import * as Window from '../Pop-upWindow/Window'
import * as Loading from '../Loaging/Loading'
import Item from '../Playlistltem/PlaylistItem'
import { useThemeContext } from '../../context/theme'

import { useState, useEffect } from 'react'
import request from '../Request/request'
import { useGetAllTrackQuery } from '../../servises/todo'




function Main() {
    const { toggleTheme, theme } = useThemeContext()

    const [isOpenAuthor, setIsOpenAuthor] = useState(false)
    const toggleAuthor = () => {
        setIsOpenAuthor(!isOpenAuthor)
        setIsOpenYear(false)
        setIsOpenGenre(false)
    }
    const [isOpenYear, setIsOpenYear] = useState(false)
    const toggleYear = () => {
        setIsOpenYear(!isOpenYear)
        setIsOpenAuthor(false)
        setIsOpenGenre(false)
    }
    const [isOpenGenre, setIsOpenGenre] = useState(false)
    const toggleGenre = () => {
        setIsOpenGenre(!isOpenGenre)
        setIsOpenAuthor(false)
        setIsOpenYear(false)
    }
    
    
    const {data, error, isLauding} = useGetAllTrackQuery()
    const isGo = !isLauding && ! data?.length;

    useEffect(
        console.log(error),
        console.log(data),
        console.log(isLauding)

    )

    return (
        <S.Main style={{ background: theme.background, color: theme.color }}>
            <S.MainNav style={{ background: theme.backgroundNavMenu }}>
                <S.NavLogo>
                    <S.LogoImage src="my-app/public/img/logo.png" alt="logo" />
                </S.NavLogo>
                <Burger />
            </S.MainNav>
            <S.MainCenterBlock>
                <Search />
                <S.CenterblockH2>Треки</S.CenterblockH2>
                <S.CenterBlockFilter>
                    <S.FilterTitle>Искать по:</S.FilterTitle>
                    <S.FilterButton
                        style={{ borderColor: theme.color }}
                        onClick={toggleAuthor}
                    >
                        исполнителю
                    </S.FilterButton>
                    {isOpenAuthor && <Window.AuthorWindow />}

                    <S.FilterButton
                        style={{ borderColor: theme.color }}
                        onClick={toggleYear}
                    >
                        году выпуска
                    </S.FilterButton>
                    {isOpenYear && <Window.YearWindow />}
                    <S.FilterButton
                        style={{ borderColor: theme.color }}
                        onClick={toggleGenre}
                    >
                        жанру
                    </S.FilterButton>
                    {isOpenGenre && <Window.GenreWindow />}
                </S.CenterBlockFilter>
                <S.CenterblockContent>
                    <PlaylistTitle />
                    {isGo ? <Loading.LoadingPly /> : <Item mass ={data}/>}
                </S.CenterblockContent>
            </S.MainCenterBlock>
            {isGo ? <Loading.SidebarLoad /> : <Sidebar />}
        </S.Main>
    )
}
export default Main
