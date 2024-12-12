import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import theme from "../../theme"

const NavBar = () => {
    const StyledToolbar = styled(Toolbar) (({})=> ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: `${theme.palette.primary.dark}`
    }))

    

    return (
      <>
        <AppBar position="fixed">
            <StyledToolbar>
            <MenuItem>About</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Projects</MenuItem>
            </StyledToolbar>      
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  