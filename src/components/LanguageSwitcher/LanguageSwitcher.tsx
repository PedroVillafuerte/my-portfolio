import { useTranslation } from "react-i18next";
import { styled, Typography } from "@mui/material";

export const LanguageSwitcher = () => {
    const {i18n, t} = useTranslation();

    const StyledButton = styled("button") (()=> ({
        color: "white",
        cursor: "pointer",
        background: "none",
        border: "1px solid white",
        borderRadius: "3px",
        padding: "3px 8px"
    }))

    return (
        
        <div className="language-switcher">
                <StyledButton 
                    onClick={() => {
                    i18n.changeLanguage(t('oppositeLanguage'));
                }}>
                    <Typography variant="h6">{t('oppositeLanguage').toUpperCase()}</Typography>
                </StyledButton>
        </div>
        
    )
}