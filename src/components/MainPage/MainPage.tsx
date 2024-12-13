import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Header from './Header';
import MainPageContent from './MainPageContent';
import { Pages, randomNicknames } from '../../helpers/types';
import FlipFindPage from '../FlipFindPage/FlipFindPage';
import { getRandomInteger } from '../../helpers/helperFunctions';

export interface MainPageProps {
  setIsFloatingBackGround: Function;
  setIsConfettiBackground: Function;
}

const MainPage: React.FC<MainPageProps> = ({ setIsFloatingBackGround, setIsConfettiBackground }) => {
  const [currentPage, setCurrentPage] = useState<Pages>('Memory Games');
  const [openedGamePage, setOpenedGamePage] = useState<Pages>('Flip & Find');
  const [isMovingMainPageLeft, setIsMovingMainPageLeft] = useState<boolean>(false);
  const [isFirstTimeAnimating, setIsFirstTimeAnimating] = useState<boolean>(true);

  const [isFlipFindGameStarted, setIsFlipFindGameStarted] = useState<boolean>(false);
  const [nicknames, setNicknames] = useState<string[]>([]);
  const [isLeftPlayersTurn, setIsLeftPlayersTurn] = useState<boolean | null>(null);
  const [isMultiplayerStarterPage, setIsMultiplayerStarterPage] = useState<boolean>(false);

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
    setIsFloatingBackGround(true);
    setIsConfettiBackground(false);
    setIsLeftPlayersTurn(null);
    setIsMultiplayerStarterPage(false);
  };

  const backToGameStarter = () => {
    setIsFloatingBackGround(true);
    setIsFlipFindGameStarted(false);
    setIsConfettiBackground(false);
    setIsLeftPlayersTurn(null);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        visibility: { xs: 'hidden', md: 'visible', lg: 'visible', xl: 'visible' },
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
        setIsFloatingBackGround={setIsFloatingBackGround}
        isFlipFindGameStarted={isFlipFindGameStarted}
        setIsFlipFindGameStarted={setIsFlipFindGameStarted}
        setIsConfettiBackground={setIsConfettiBackground}
        nicknames={nicknames}
        setNicknames={setNicknames}
        isLeftPlayersTurn={isLeftPlayersTurn}
        setIsLeftPlayersTurn={setIsLeftPlayersTurn}
        setIsMultiplayerStarterPage={setIsMultiplayerStarterPage}
        isMultiplayerStarterPage={isMultiplayerStarterPage}
      />
    </Grid>
  );
};

export default MainPage;
