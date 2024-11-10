import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import PracticePage from './PracticePage/PracticePage';
import Header from './Header';
import { CustomTypography } from '../helpers/CustomTypography';
import FloatingIconsBackground from './FloatingIconsBackground';
import MainPageContent from './MainPageContent/MainPageContent';

export type Pages = 'Mini-games' | 'Campaign' | 'Settings';

const MainPage: React.FC = () => {
  const [isMainPage, setIsMainPage] = useState<boolean>(true);
  const [isPracticePage, setIsPracticePage] = useState<boolean>(false);
  const [isCampaignPage, setIsCampaignPage] = useState<boolean>(false);

  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [newPage, setnewPage] = useState<Pages>('Mini-games');

  const [isFloatingBackGround, setIsFloatingBackGround] = useState<boolean>(true);
  const [isMiniGameStarted, setIsMiniGameStarted] = useState<boolean>(false);

  const openPracticePage = () => {
    setIsMainPage(false);
    setIsPracticePage(true);
    setIsAnimating(true);
    setnewPage('Mini-games');
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <FloatingIconsBackground isFloatingBackGround={isFloatingBackGround} />

      <Header
        newPage={newPage}
        isAnimating={isAnimating}
        setIsPracticePage={setIsPracticePage}
        setIsAnimating={setIsAnimating}
        isMainPage={isMainPage}
        setIsMainPage={setIsMainPage}
        isPracticePage={isPracticePage}
        setIsMiniGameStarted={setIsMiniGameStarted}
      />

      <MainPageContent isMainPage={isMainPage} isAnimating={isAnimating} openPracticePage={openPracticePage} />

      <PracticePage
        isPracticePage={isPracticePage}
        isAnimating={isAnimating}
        setIsFloatingBackGround={setIsFloatingBackGround}
        isMiniGameStarted={isMiniGameStarted}
        setIsMiniGameStarted={setIsMiniGameStarted}
      />
    </Grid>
  );
};

export default MainPage;
