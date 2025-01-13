import { Grid, styled, Typography } from "@mui/material"
import placeHolder from "../../../../assets/images/placeHolder.png"
import imgPortfolio from "../../../../assets/images/imgPortfolio.png"
import Project from "../../../../components/Project/Project"
import { useTranslation } from "react-i18next";

const Projects = () => {
  const{t} = useTranslation();
  
    const StyledProjects = styled("div") (({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up('xs')]: {
          paddingTop: "50px",
          paddingBottom: "50px",
        },
        [theme.breakpoints.up('md')]: {
          paddingTop: "0",
        }
    }))

    return (
      <>
      <StyledProjects id="projects">
      <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2} pt={2}>{t("projectsTittle")}</Typography>
      <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
          <Grid item xs={12} md={4} textAlign="center" border={1} borderColor={"white"} margin={5} padding={"16px"}>
            <Project 
            name={t("project1Tittle")}
            image={imgPortfolio}
            description={t("project1Text")}
            buttons={[
                {label: t("projectsButtonViewProject"), link: 'https://pedrovillafuerte.vercel.app/'},
                {label: t("projectsButtonViewCode"), link: 'https://github.com/PedroVillafuerte/my-portfolio'},
            ]}
            >
            </Project>
          </Grid>
          
          <Grid item xs={12} md={4} textAlign="center" border={1} borderColor={"white"} margin={5} padding={"16px"}>
          <Project 
            name={t("project2Tittle")}
            image={placeHolder}
            description={t("project2Text")}
            buttons={[
                {label: t("projectsButtonViewProject"), link: 'https://www.google.com/'},
                {label: t("projectsButtonViewCode"), link: 'https://github.com/'},
            ]}
            >
            </Project>
          </Grid>
          
          <Grid item xs={12} md={4} textAlign="center" border={1} borderColor={"white"} margin={5} padding={"16px"}>
          <Project 
            name={t("project3Tittle")}
            image={placeHolder}
            description={t("project3Text")}
            buttons={[
                {label: t("projectsButtonViewProject"), link: 'https://www.google.com/'},
                {label: t("projectsButtonViewCode"), link: 'https://github.com/'},
            ]}
            >
            </Project>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center" border={1} borderColor={"white"} margin={5} padding={"16px"}>
          <Project 
            name={t("project4Tittle")}
            image={placeHolder}
            description={t("project4Text")}
            buttons={[
                {label: t("projectsButtonViewProject"), link: 'https://www.google.com/'},
                {label: t("projectsButtonViewCode"), link: 'https://github.com/'},
            ]}
            >
            </Project>
            </Grid>
        </Grid>
      </StyledProjects>
        
      </>
    )
  }
  
  export default Projects
  