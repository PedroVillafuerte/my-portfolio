import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import theme from "../../theme"

const NavBar = () => {
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
              <MenuItem>Main</MenuItem>
              </StyledA>
            <StyledA onClick={() => ScrollTo('about')}>
            <MenuItem>About</MenuItem>
            </StyledA>
            <StyledA onClick={() => ScrollTo('projects')}>
            <MenuItem>Projects</MenuItem>
            </StyledA>
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
  