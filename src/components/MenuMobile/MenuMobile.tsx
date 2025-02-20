import { Box, Container, styled } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from "react-i18next";

export function MenuMobile({}) {
    const { t } = useTranslation();

    const StyledA = styled('a')(({ }) => ({
        textDecoration: 'none'
    }))

    const StyledDiv = styled('div')(({}) => ({
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: '5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        background: 'linear-gradient(34deg, rgba(100,100,100,0.95) 0%, rgba(35,100,210,0.80) 95%)',
        backdropFilter: 'blur(10px)'
    }))

    return (
        <Container >
            <StyledDiv>
                <Box position="absolute" top="5rem" right="2rem">
                    <CloseIcon />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap="2rem">
                    <StyledA onClick={() => ScrollTo('hero')}>
                        <a>{t("navMain")}</a>
                    </StyledA>
                    <StyledA onClick={() => ScrollTo('about')}>
                        <a>{t("navAbout")}</a>
                    </StyledA>
                    <StyledA onClick={() => ScrollTo('projects')}>
                        <a>{t("navProjects")}</a>
                    </StyledA>
                </Box>

            </StyledDiv>
        </Container>

    )
}

function ScrollTo(sectionId: string) {
    const section = document.getElementById(sectionId)
    const nav = document.getElementById('navbar')
    if (section?.offsetTop != null && nav?.offsetHeight != null) {
        console.log(section?.scrollHeight)
        window.scrollTo({ top: section?.offsetTop - nav?.offsetHeight, behavior: 'smooth' })
    }
}

export default MenuMobile

