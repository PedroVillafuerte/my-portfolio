import { Container, Grid2, styled, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import Skills from "../../../../components/Skills/Skills";
import allSkills from "../../../../components/Skills/AllSkills";

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
          <Grid2 container spacing={3} justifyContent={'center'}>

            <Grid2 size={{ xs: 12, md: 12 }} paddingBottom={5} justifyContent={'center'}>
              <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
                {t('aboutTitle')}
              </Typography>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 12 }} borderBottom={1} borderColor="primary.contrastText" paddingBottom={10} justifyContent={'center'}>
              <Typography color="primary.contrastText" variant="h5" textAlign="justify">
                {t('aboutText')}
              </Typography>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 12 }} marginTop={5}>
              <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
                {t('skillsTitle')}
              </Typography>
            </Grid2>

            {allSkills.map(skill => (
              <Grid2 size={{ xs: 4, md: 1 }} display="flex" justifyContent="center" spacing={2} marginRight={2} marginLeft={2}>
                <Skills logo={skill.logo}>
                  <Typography>{t(skill.nome)}</Typography>
                </Skills>
              </Grid2>
            ))}
            
        </Grid2>
      </Container>
    </StyledAbout>
      
    </>
  )
}

export default About
