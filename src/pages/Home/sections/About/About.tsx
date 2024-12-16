import { Container, Grid, styled, Typography } from "@mui/material"
import SkillsButton from "../../../../components/SkillsButton/SkillsButton"
import { useTranslation } from "react-i18next"

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
        <Grid container spacing={2} >
          <Grid item xs={12} md={12} borderBottom={1} paddingBottom={10} color="primary.contrastText" >
          <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>{t("aboutTittle")}</Typography>
          <Typography color="primary.contrastText" variant="h5" textAlign="center">{t("aboutText")}</Typography>
            
          </Grid>
          <Grid item xs={12} md={12} marginTop={5}>
          <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>{t("skillsTittle")}</Typography>
          <Grid item xs={12} md={12} display="flex" justifyContent="center">
            <SkillsButton >
              <Typography>
              HTML
              </Typography>
              </SkillsButton>
              <SkillsButton >
              <Typography>
              CSS
              </Typography>
              </SkillsButton>
              <SkillsButton >
              <Typography>
              Javascript
              </Typography>
              </SkillsButton>
              <SkillsButton >
              <Typography>
              React
              </Typography>
              </SkillsButton>
            </Grid>
            <Grid item xs={12} md={12} display="flex" justifyContent="center">
            <SkillsButton >
              <Typography>
              Typescript
              </Typography>
              </SkillsButton>
              <SkillsButton >
              <Typography>
              Git
              </Typography>
              </SkillsButton>
              <SkillsButton >
              <Typography>
              Python
              </Typography>
              </SkillsButton>
              <SkillsButton >
              <Typography>
              PowerBI
              </Typography>
              </SkillsButton>
            </Grid>
          </Grid>
        </Grid>
        </Container>
    </StyledAbout>
      
    </>
  )
}

export default About
