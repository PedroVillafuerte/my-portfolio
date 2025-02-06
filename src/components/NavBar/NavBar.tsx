import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher"
import { useTranslation } from "react-i18next";
import PedroLogo from "../PedroLogo/PedroLogo";

const NavBar = () => {
    const{t} = useTranslation();

    const StyledToolbar = styled(Toolbar) (({theme})=> ({
        display: "flex",
        backgroundColor: `${theme.palette.primary.dark}`,
        maxWidth:"100vw",
        [theme.breakpoints.up('xs')]: {
          justifyContent: "center",
          fontSize: "0.1em",
        },
        [theme.breakpoints.up('md')]: {
          justifyContent: "space-between",
          fontSize: "1em",
          } 
    }))

    const StyledA = styled('a') (({})=> ({
      textDecoration: 'none',
  }))
  
    const StyledDiv = styled('div') (({})=> ({
      display: "flex",
      alignContent: "left"
  })) 

    return (
      <>
        <AppBar position="sticky">
            <StyledToolbar id="navbar">
              <PedroLogo></PedroLogo>
              <StyledDiv>
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
              </StyledDiv>       
                           
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
  