import { Grid, styled, Typography } from "@mui/material"
import placeHolder from "../../../../assets/images/placeHolder.png"
import Project from "../../../../components/Project/Project"

const Projects = () => {
  
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
      <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2} pt={2}>Projects</Typography>
      <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
          <Grid item xs={12} md={4} textAlign="center" border={1} borderColor={"white"} margin={5} padding={"16px"}>
            <Project 
            name="Portfolio em React"
            image={placeHolder}
            description="Para esse projeto usei ..."
            buttons={[
                {label: 'View Project', link: 'https://pedrovillafuerte.vercel.app/'},
                {label: 'View Code', link: 'https://github.com/PedroVillafuerte/my-portfolio'},
            ]}
            >
            </Project>
          </Grid>
          
          <Grid item xs={12} md={4} textAlign="center" border={1} borderColor={"white"} margin={5} padding={"16px"}>
          <Project 
            name="CRUD usando REACT"
            image={placeHolder}
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudantium facere consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem."
            buttons={[
                {label: 'View Project', link: 'https://www.google.com/'},
                {label: 'View Code', link: 'https://github.com/'},
            ]}
            >
            </Project>
          </Grid>
          
          <Grid item xs={12} md={4} textAlign="center" border={1} borderColor={"white"} margin={5} padding={"16px"}>
          <Project 
            name="Projeto 3"
            image={placeHolder}
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudantium facere consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem."
            buttons={[
                {label: 'View Project', link: 'https://www.google.com/'},
                {label: 'View Code', link: 'https://github.com/'},
            ]}
            >
            </Project>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center" border={1} borderColor={"white"} margin={5} padding={"16px"}>
          <Project 
            name="Projeto 4"
            image={placeHolder}
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum accusantium inventore porro cupiditate natus atque tempore doloribus? Quae laudantium facere consequuntur ea aliquam reiciendis corrupti, ut maxime quam exercitationem."
            buttons={[
                {label: 'View Project', link: 'https://www.google.com/'},
                {label: 'View Code', link: 'https://github.com/'},
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
  