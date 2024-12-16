import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import theme from "../../theme"
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher"
import { useTranslation } from "react-i18next";

const NavBar = () => {
    const{t} = useTranslation();

    const StyledToolbar = styled(Toolbar) (({})=> ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: `${theme.palette.primary.dark}`
    }))

    const StyledA = styled('a') (({})=> ({
      textDecoration: 'none',
  }))  

    return (
      <>
        <AppBar position="sticky">
            <StyledToolbar id="navbar">
              <StyledA onClick={() => ScrollTo('hero')}>
                <MenuItem>{t("navMain")}</MenuItem>
              </StyledA>
              <StyledA onClick={() => ScrollTo('about')}>
                <MenuItem>{t("navAbout")}</MenuItem>
              </StyledA>
              <StyledA onClick={() => ScrollTo('projects')}>
                <MenuItem>{t("navProjects")}</MenuItem>
              </StyledA>  
              <LanguageSwitcher />             
            </StyledToolbar>
            
                 
        </AppBar>
      </>
    )
  }
  
  function ScrollTo(sectionId: string) {
    const section = document.getElementById(sectionId)
    const nav = document.getElementById('navbar')
    if (section?.offsetTop != null && nav?.offsetHeight != null) {
      console.log(section?.scrollHeight)
      window.scrollTo({ top: section?.offsetTop - nav?.offsetHeight, behavior: 'smooth' })
    }
  }

  export default NavBar
  