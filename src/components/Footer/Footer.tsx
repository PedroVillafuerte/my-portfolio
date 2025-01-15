import { Container, Grid, styled, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const StyledFooter = styled('div')(({ theme }) => ({
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    justifyContent: 'space-evenly',
    padding: '20px',
  }))

  const StyledLink = styled('a')(({ theme }) => ({
    // Adicione seus estilos aqui, por exemplo:
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  }))

  return (
    <>
      <StyledFooter id="footer">
        <Container>
          <Grid container display={'flex'} alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
            <Grid item xs={4} md={4}>
              <StyledLink href="https://www.linkedin.com/in/pedro-villafuerte-9bb7b5215/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </StyledLink>
            </Grid>
            <Grid item xs={4} md={4}>
              <StyledLink href="https://github.com/PedroVillafuerte" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </StyledLink>
            </Grid>
            <Grid item xs={4} md={4}>
              <StyledLink href="https://mail.google.com/mail/u/0/?fs=1&to=pedro.tvilla@gmail.com&body=Olá,&tf=cm" target="_blank" rel="noopener noreferrer">
                <EmailIcon />
              </StyledLink>
            </Grid>
          </Grid>
          <Typography textAlign={'center'}>© 2024 Pedro Villafuerte - All rights reserved.</Typography>
        </Container>
      </StyledFooter>
    </>
  )
}

export default Footer