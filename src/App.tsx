import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { Grid } from '@mui/material';
import MainPage from './components/Pages/MainPage/MainPage';
import { useState } from 'react';
import FloatingIconsBackground from './FloatingIconsBackground';
import FlipFindPage from './components/Pages/FlipFindPage/FlipFindPage';

const App: React.FC = () => {
  const [isFloatingBackGround, setIsFloatingBackGround] = useState<boolean>(true);

  const [isMainPage, setIsMainPage] = useState<boolean>(true);
  const [isFlipFindPage, setIsFlipFindPage] = useState<boolean>(false);
  const [isMissingItemPage, setIsMissingItemPage] = useState<boolean>(false);
  const [isCardRecallPage, setIsCardRecallPage] = useState<boolean>(false);
  const [isSequenceMasterPage, setIsSequenceMasterPage] = useState<boolean>(false);

  const [isAnimating, setIsAnimating] = useState<boolean>(false);

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
        <Routes>
          <Route
            path="/memory-games"
            element={
              <MainPage
                setIsFloatingBackGround={setIsFloatingBackGround}
                setIsMainPage={setIsMainPage}
                setIsAnimating={setIsAnimating}
                setIsFlipFindPage={setIsFlipFindPage}
                isAnimating={isAnimating}
                isMainPage={isMainPage}
                isFlipFindPage={isFlipFindPage}
              />
            }
          />
          {/* <Route
            path="/memory-games/flip-find"
            element={
              <FlipFindPage
                isFlipFindPage={false}
                isAnimating={false}
                setIsFloatingBackGround={setIsFloatingBackGround}
                isFlipFindGameStarted={false}
                setIsFlipFindGameStarted={setIsFlipFindGameStarted}
              />
            }
          /> */}
        </Routes>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
