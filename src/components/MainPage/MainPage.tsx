import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Header from './Header/Header';
import MainPageContent from './MainPageContent';
import { Pages, randomNicknames } from '../../helpers/types';
import FlipFindPage from '../FlipFindPage/FlipFindPage';
import { getRandomInteger } from '../../helpers/helperFunctions';

export interface MainPageProps {
  setIsFloatingBackground: Function;
  setIsConfettiBackground: Function;
}

const MainPage: React.FC<MainPageProps> = ({ setIsFloatingBackground, setIsConfettiBackground }) => {
  const [currentPage, setCurrentPage] = useState<Pages>('Memory Games');
  const [openedGamePage, setOpenedGamePage] = useState<Pages>('Flip & Find');
  const [isMovingMainPageLeft, setIsMovingMainPageLeft] = useState<boolean>(false);
  const [isFirstTimeAnimating, setIsFirstTimeAnimating] = useState<boolean>(true);

  const [isFlipFindGameStarted, setIsFlipFindGameStarted] = useState<boolean>(false);
  const [nicknames, setNicknames] = useState<string[]>([]);
  const [isLeftPlayersTurn, setIsLeftPlayersTurn] = useState<boolean | null>(null);
  const [isMultiplayerStarterPage, setIsMultiplayerStarterPage] = useState<boolean>(false);
  const [isCancelledGame, setIsCancelledGame] = useState<boolean>(false);

  useEffect(() => {
    const randomInt1 = getRandomInteger(0, randomNicknames.length);
    const nicknamesArr: string[] = [randomNicknames[randomInt1]];

    while (nicknamesArr.length < 2) {
      const randomInt2 = getRandomInteger(0, randomNicknames.length);
      if (randomInt1 !== randomInt2) {
        nicknamesArr.push(randomNicknames[randomInt2]);
      }
    }

    setNicknames(nicknamesArr);
  }, []);

  const openGamePage = (page: Pages) => {
    setCurrentPage(page);
    setOpenedGamePage(page);
    setIsMovingMainPageLeft(true);
    if (isFirstTimeAnimating) {
      setIsFirstTimeAnimating(false);
    }
  };

  const backToMainPage = () => {
    setCurrentPage('Memory Games');
    setIsMovingMainPageLeft(false);
    setIsFlipFindGameStarted(false);
    setIsFloatingBackground(true);
    setIsConfettiBackground(false);
    setIsLeftPlayersTurn(null);
    setIsMultiplayerStarterPage(false);
    setIsCancelledGame(true);
  };

  const backToGameStarter = () => {
    setIsFloatingBackground(true);
    setIsFlipFindGameStarted(false);
    setIsConfettiBackground(false);
    setIsLeftPlayersTurn(null);
    setIsMultiplayerStarterPage(false);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        display: { xs: 'none', md: 'flex' },
      }}
    >
      <Header
        currentPage={currentPage}
        openedGamePage={openedGamePage}
        backToMainPage={backToMainPage}
        backToGameStarter={backToGameStarter}
        isMovingMainPageLeft={isMovingMainPageLeft}
        isFirstTimeAnimating={isFirstTimeAnimating}
        isFlipFindGameStarted={isFlipFindGameStarted}
      />

      <MainPageContent
        currentPage={currentPage}
        isMovingMainPageLeft={isMovingMainPageLeft}
        openGamePage={openGamePage}
        isFirstTimeAnimating={isFirstTimeAnimating}
      />

      <FlipFindPage
        currentPage={currentPage}
        isMovingMainPageLeft={isMovingMainPageLeft}
        setIsFloatingBackground={setIsFloatingBackground}
        isFlipFindGameStarted={isFlipFindGameStarted}
        setIsFlipFindGameStarted={setIsFlipFindGameStarted}
        setIsConfettiBackground={setIsConfettiBackground}
        nicknames={nicknames}
        setNicknames={setNicknames}
        isLeftPlayersTurn={isLeftPlayersTurn}
        setIsLeftPlayersTurn={setIsLeftPlayersTurn}
        setIsMultiplayerStarterPage={setIsMultiplayerStarterPage}
        isMultiplayerStarterPage={isMultiplayerStarterPage}
        isCancelledGame={isCancelledGame}
        setIsCancelledGame={setIsCancelledGame}
      />
    </Grid>
  );
};

export default MainPage;
