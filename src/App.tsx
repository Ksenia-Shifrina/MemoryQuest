import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import MainPage from './components/MainPage/MainPage';
import { useState } from 'react';
import FloatingIconsBackground from './backgrounds/FloatingIconsBackground';
import ConfettiBackground from './backgrounds/ConfettiBackground';
import SmallScreenMessage from './backgrounds/SmallScreenMessage';

const App: React.FC = () => {
  const [isFloatingBackground, setIsFloatingBackground] = useState<boolean>(true);
  const [isConfettiBackground, setIsConfettiBackground] = useState<boolean>(false);

  let theme = createTheme({
    palette: {
      primary: {
        main: '#AE8176',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container className="App" justifyContent="center" alignItems="center" display="flex">
        <FloatingIconsBackground isFloatingBackGround={isFloatingBackground} />
        {isConfettiBackground && <ConfettiBackground />}
        <MainPage setIsFloatingBackground={setIsFloatingBackground} setIsConfettiBackground={setIsConfettiBackground} />
        <SmallScreenMessage />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
