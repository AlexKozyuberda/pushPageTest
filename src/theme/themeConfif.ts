import { createTheme } from '@mui/material';

const themeConfig = createTheme({
  typography: {
    h1: {
      fontSize: '32',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      marginBottom: '0.8rem',
    },
    // Добавьте стили для других заголовков (h3, h4, h5, h6) и т. д.
    subtitle1: {
      fontSize: '1.2rem',
      fontWeight: 'normal',
      marginBottom: '0.6rem',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 'normal',
      marginBottom: '0.4rem',
    },
    // Добавьте стили для других параграфов и текста
  },
});

export default themeConfig;
