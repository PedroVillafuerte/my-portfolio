import { AppBar, Box, MenuItem, styled, Toolbar } from "@mui/material"
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher"
import { useTranslation } from "react-i18next";
import MenuIcon from '@mui/icons-material/Menu';
import PedroLogo from "../PedroLogo/PedroLogo";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const NavBar = ({ }) => {

  const { t } = useTranslation();
  const [mobileMenu, setmobileMenu] = useState(false)

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    padding: "0px 30px",
    display: "flex",
    backgroundColor: `${theme.palette.primary.dark}`,
    maxWidth: "100vw",
    justifyContent: "space-between",
    fontSize: "1em",
  }))

  const StyledA = styled('a')(({ }) => ({
    textDecoration: 'none',
  }))

  const StyledDiv = styled('div')(({ }) => ({
    display: "flex",
    alignContent: "left"
  }))

  const StyledDivMobile = styled('div')(({ }) => ({
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: '5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "white",
    background: 'linear-gradient(34deg, rgba(100,100,100,0.95) 0%, rgba(35,100,210,0.80) 95%)',
    backdropFilter: 'blur(10px)'
  }))

  const StyledLink = styled('a')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    height:"100%",
    fontSize:"3rem",
    '&:hover': {
      cursor: 'pointer',
    },
  }))

  const StyledClose = styled('div')(() => ({
    position: "absolute",
    top: "1rem",
    right: "1rem",
    fontSize: "2rem"
  }))

  return (
    <>

      <AppBar position="sticky" sx={{ display: mobileMenu ? 'none' : 'flex' }}>
        <StyledToolbar id="navbar">
          <PedroLogo />

          <StyledDiv sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
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

          <StyledDiv sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
            <div onClick={() => setmobileMenu(true)}>
              <MenuIcon />
            </div>
          </StyledDiv>

        </StyledToolbar>
      </AppBar>

      {mobileMenu && (
        <>
          <StyledDivMobile>

            <StyledClose onClick={() => setmobileMenu(false)}>
              <CloseIcon />
            </StyledClose>

            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap="4rem" fontSize="1.8rem">
              <StyledA onClick={() => {
                setmobileMenu(false)
                ScrollTo('hero')
              }}>
                {t("navMain")}
              </StyledA>
              <StyledA onClick={() => {
                setmobileMenu(false)
                ScrollTo('about')
              }}>
                {t("navAbout")}
              </StyledA>
              <StyledA onClick={() => {
                setmobileMenu(false)
                ScrollTo('projects')
              }}>
                {t("navProjects")}
              </StyledA>
              <LanguageSwitcher />
              <Box width="50vw" textAlign="center" display='flex' justifyContent="space-evenly">
                <StyledLink href="https://www.linkedin.com/in/pedro-villafuerte-9bb7b5215/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon fontSize="large"/>
                </StyledLink>
                <StyledLink href="https://github.com/PedroVillafuerte" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon fontSize="large"/>
                </StyledLink>
              </Box>

            </Box>
          </StyledDivMobile>
        </>
      )}
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
