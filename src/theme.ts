import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#418e3e',
    },
  },
  typography:{
    fontFamily: "Segoe UI"
  }
});

theme = responsiveFontSizes(theme);

export default theme;