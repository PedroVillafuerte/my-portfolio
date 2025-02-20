import { Grid, styled, Typography } from "@mui/material"
import imgPortfolio from "../../../../assets/images/imgPortfolio2.png"
import imgRPABMG from "../../../../assets/images/imgRPAdoBMG.png"
import imgAluraBooks from "../../../../assets/images/imgAluraBooks.png"
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
      <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={3} pt={3}>{t("projectsTittle")}</Typography>
      <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
          <Grid item xs={12} md={4} textAlign="center" border={2} borderRadius={1} borderColor={"white"} margin={4} padding={"16px"}>
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
          
          <Grid item xs={12} md={4} textAlign="center" border={2} borderRadius={1} borderColor={"white"} margin={4} padding={"16px"}>
          <Project 
            name={t("project2Tittle")}
            image={imgAluraBooks}
            description={t("project2Text")}
            buttons={[
                {label: t("projectsButtonViewProject"), link: 'https://pedrovillafuerte.vercel.app/'},
                {label: t("projectsButtonViewCode"), link: 'https://github.com/PedroVillafuerte'},
            ]}
            >
            </Project>
          </Grid>

          <Grid item xs={12} md={4} textAlign="center" border={2} borderRadius={1} borderColor={"white"} margin={4} padding={"16px"}>
          <Project 
            name={t("project3Tittle")}
            image={imgRPABMG}
            description={t("project3Text")}
            buttons={[
                {label: t("projectsButtonViewCode"), link: 'https://github.com/PedroVillafuerte/RobotProcessAutomation-BMG'},
                {label: t("projectsButtonViewCode"), link: 'https://github.com/PedroVillafuerte/RobotProcessAutomation-BMG'},
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
  