import React,{useContext} from "react";

export const themes={
    light:{  
        background: "#FFFFFF",
        color: "#000000",
        backgroundNavMenu:'#F6F5F3',
        colorIcon:'#B1B1B1',
        colorPlayProgress:"#D9D9D9",
        colorPlayProgressEnd:"#AD61FF"

    },
    dark:{
        background: "#181818",
        color: "#FFFFFF",
        backgroundNavMenu:'#1C1C1C',
        colorIcon:'#313131',
        colorPlayProgress:"#2E2E2E",
        colorPlayProgressEnd:"#580EA2",

        

    },
}
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme:()=>{},

})
export const useThemeContext=()=>{
    const theme = useContext(ThemeContext);

    if(!theme)return theme.dark

    return theme;
}