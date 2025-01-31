import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Blue color for the primary theme
    },
    background: {
      default: '#f4f4f4', // Light background for the app
      paper: '#fff', // Paper background (used in cards, sections)
    },
    text: {
      primary: '#333', // Dark text for better readability
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      color: '#555',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#777',
    },
  },
});

export default theme;
