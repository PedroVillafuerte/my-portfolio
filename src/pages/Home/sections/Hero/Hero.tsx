import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import resume from '../../../../assets/PedroCurriculo.pdf'
import { useTranslation } from "react-i18next";

const Hero = () => {

  const{t} = useTranslation();

    const StyledHero = styled("div") (({theme})=> ({
        backgroundColor: theme.palette.primary.main,
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

    const StyledImg = styled("img") (({ theme })=> ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        [theme.breakpoints.up('xs')]: {
          width: "75%",
        }
    }))

    return (
      <>
        <StyledHero id="hero">
          <Container maxWidth="lg" >
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
            <Typography color="primary.contrastText" variant="h2" textAlign="center"  >{t("heroH2")}</Typography>
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
              {t("heroButtonDownload")}
                </Typography>
              </StyledButton>
            </Grid>
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <StyledButton onClick={()=> {
                const link = document.createElement('a')
                link.href = 'https://mail.google.com/mail/u/0/?fs=1&to=pedro.tvilla@gmail.com&body=Olá,&tf=cm'
                link.target="_blank"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                }}>
              <EmailIcon/>
              <Typography>
              {t("heroButtonContact")}
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
  