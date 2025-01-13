import { styled } from "@mui/material"
import theme from "../../theme"
import { ReactNode } from "react"

interface SkillsButton{
    children: ReactNode
    logo?: string
}

const StyledDiv: React.FC<SkillsButton> = ({ children, logo }) => {
  
    
    const StyledDiv = styled("div") (()=> ({
        backgroundColor: "#6c6d70",
        borderBottom: `5px solid #1f61d1`,
        borderRadius: "5px",
        padding:"15px 0px",
        margin: "20px",
        color: theme.palette.primary.contrastText,
        alignContent: "center",
        textAlign: "center",
        gap: "100px",
    }))

    const StyledImg = styled("img") (()=> ({
        width:"35%"
    }))

    return (
      <>
        
        <StyledDiv >
            <StyledImg src={logo}/>
            {children}
        </StyledDiv>
      </>
    )
  }
  
  export default StyledDiv
  