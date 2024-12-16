import { useTranslation } from "react-i18next";
import br from "../../assets/images/brasil.png";
import us from "../../assets/images/estados-unidos.png"
import { styled } from "@mui/material";

const languageOptions = [
    {
        name: "Portugues",
        value: "ptBR",
        flag: br,
    },
    {
        name: "English",
        value: "en",
        flag: us,
    },
]

export const LanguageSwitcher = () => {
    const {i18n} = useTranslation();

    const LanguageSwitcher= styled("div")(({ theme })=> ({
        [theme.breakpoints.up('xs')]: {
            position: "relative",
          },
          [theme.breakpoints.up('md')]: {
            position: "absolute",
            top: "5px",
            right: "5px",
            }        
    }))

    const StyledImg = styled("img") (({ theme })=> ({
        [theme.breakpoints.up('xs')]: {
          height: "2em",
        },
        [theme.breakpoints.up('md')]: {
            height: "2em",
          }
    }))

    const StyledButton = styled("button") (()=> ({
        cursor: "pointer",
        background: "none",
        border: "none",
    }))

    return (
        <LanguageSwitcher>
        <div className="language-switcher">

            {languageOptions.map(languageOptions => (
                <StyledButton 
                key={languageOptions.value}
                onClick={() => {
                    i18n.changeLanguage(languageOptions.value);
                }}>
                    <StyledImg src={languageOptions.flag} style={{
                        height:
                            i18n.language === languageOptions.value ? "2.5em" : "2em",
                    }} />
                </StyledButton>
               
            ))}
        </div>
        </LanguageSwitcher>
    )
}