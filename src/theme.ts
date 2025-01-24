import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#303030',
    },
    secondary: {
      main: '#1f61d1',
    },
  },
  typography:{
    fontFamily: "Segoe UI"
  }
});

theme = responsiveFontSizes(theme);

export default theme;