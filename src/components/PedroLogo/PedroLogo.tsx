import { styled } from "@mui/material"

const PedroLogo = () => {

    const StyledLogo = styled("div") (({theme})=> ({
        display: "flex",
        [theme.breakpoints.up('xs')]: {
            fontSize: "0.8em",
          },
          [theme.breakpoints.up('md')]: {
            fontSize: "1.8em",
            } 
    }))


    const StyledPedro = styled("div") (({theme})=> ({
        color: `${theme.palette.primary.contrastText}`,
        paddingRight: 3,        
    }))

    const StyledVillafuerte = styled("div") (({ theme })=> ({
        color: `${theme.palette.secondary.main}`,
        paddingLeft: 3
    }))

    return (
      <>
      <StyledLogo>
      <StyledPedro>PEDRO</StyledPedro>
      <StyledVillafuerte>VILLAFUERTE</StyledVillafuerte>
      </StyledLogo>
      </>
    )
  }
  
  export default PedroLogo
  