import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import resume from '../../../../assets/PedroCurriculo.pdf'

const Hero = () => {

    const StyledHero = styled("div") (({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
          paddingTop: "100px",
        },
        [theme.breakpoints.up('md')]: {
          paddingTop: "0",
        }
    }))

    const StyledImg = styled("img") (({ theme })=> ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
      <>
        <StyledHero id="hero">
          <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground></AnimatedBackground>
              </Box>
              <Box position="relative" textAlign="center">
              <StyledImg src={Avatar}/>
              </Box>
            </Box>
            
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Pedro Villafuerte</Typography>
            <Typography color="primary.contrastText" variant="h2" textAlign="center">I`m a Software Engineer</Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
              <StyledButton onClick={()=> {
                const link = document.createElement('a')
                link.href = resume
                link.download = 'Curriculo-PedroVillafuerte.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}>
              <DownloadIcon/> 
              <Typography>
                Download CV
                </Typography>
              </StyledButton>
            </Grid>
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <StyledButton onClick={()=> console.log("contact")}>
              <EmailIcon/>
              <Typography>
              Contact me
              </Typography>
              </StyledButton>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  