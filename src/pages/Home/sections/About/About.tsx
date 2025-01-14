import { Container, Grid, styled, Typography } from "@mui/material"
import SkillsButton from "../../../../components/SkillsButton/SkillsButton"
import { useTranslation } from "react-i18next"
import Skills from "../../../../components/Skills/Skills";
import HTML5logo from "../../../../assets/images/Icons/html.png"
import CssLogo from "../../../../assets/images/Icons/css.png"
import JavascriptLogo from "../../../../assets/images/Icons/javascript.png"
import ReactLogo from "../../../../assets/images/Icons/react.png"
import TypescriptLogo from "../../../../assets/images/Icons/typescript.png"
import GitLogo from "../../../../assets/images/Icons/git.png"
import PythonLogo from "../../../../assets/images/Icons/python.png"
import SeleniumLogo from "../../../../assets/images/Icons/selenium.png"

const About = () => {

  const{t} = useTranslation();
  
    const StyledAbout = styled("div") (({theme})=> ({
        backgroundColor: theme.palette.primary.light,
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
          paddingTop: "50px",
          paddingBottom: "50px",
        },
        [theme.breakpoints.up('md')]: {
          paddingTop: "0",
          height: "100vh"
        }
    }))

  return (
    <>
    <StyledAbout id="about">
    <Container maxWidth="lg">
        <Grid container spacing={2} marginTop={5}>
          <Grid item xs={12} md={12} borderBottom={1} paddingBottom={10} color="primary.contrastText" >
          <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>{t("aboutTittle")}</Typography>
          <Typography color="primary.contrastText" variant="h5" textAlign="center">{t("aboutText")}</Typography>
            
          </Grid>
          <Grid item xs={12} md={12} marginTop={5}>
          <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>{t("skillsTittle")}</Typography>
          <Grid item xs={3} md={12} display="flex" justifyContent="center">
            <Skills logo={HTML5logo}>
              <Typography>
              HTML
              </Typography>
              </Skills>
              <Skills logo={CssLogo} >
              <Typography>
              CSS
              </Typography>
              </Skills>
              <Skills logo={JavascriptLogo}>
              <Typography>
              Javascript
              </Typography>
              </Skills>
              <Skills logo={ReactLogo} >
              <Typography>
              React
              </Typography>
              </Skills>
            
            <Skills logo={TypescriptLogo}>
              <Typography>
              Typescript
              </Typography>
              </Skills>
              <Skills logo={GitLogo}>
              <Typography>
              Git
              </Typography>
              </Skills>
              <Skills logo={PythonLogo}>
              <Typography>
              Python
              </Typography>
              </Skills>
              <Skills logo={SeleniumLogo}>
              <Typography>
              Selenium
              </Typography>
              </Skills>
            </Grid>
          </Grid>
        </Grid>
        </Container>
    </StyledAbout>
      
    </>
  )
}

export default About
