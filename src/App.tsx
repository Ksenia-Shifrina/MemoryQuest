import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import MainPage from './components/Pages/MainPage/MainPage';
import { useState } from 'react';
import FloatingIconsBackground from './FloatingIconsBackground';

const App: React.FC = () => {
  const [isFloatingBackGround, setIsFloatingBackGround] = useState<boolean>(true);

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
        <FloatingIconsBackground isFloatingBackGround={isFloatingBackGround} />
        <MainPage setIsFloatingBackGround={setIsFloatingBackGround} />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
