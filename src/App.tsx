import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Route, Routes } from 'react-router-dom';
import { Grid } from '@mui/material';
import PracticePage from './components/PracticePage/PracticePage';
import MainPage from './components/MainPage';

const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#AE8176',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container className="App" justifyContent="center" alignItems="center">
        <MainPage />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
