import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import MainPage from './components/MainPage/MainPage';
import { useState } from 'react';
import FloatingIconsBackground from './FloatingIconsBackground';
import ConfettiBackground from './ConfettiBackground';

const App: React.FC = () => {
  const [isFloatingBackGround, setIsFloatingBackGround] = useState<boolean>(true);
  const [isConfettiBackground, setIsConfettiBackground] = useState<boolean>(false);

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
        {isConfettiBackground && <ConfettiBackground />}
        <MainPage setIsFloatingBackGround={setIsFloatingBackGround} setIsConfettiBackground={setIsConfettiBackground} />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
