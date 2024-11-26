import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import Header from './Header';
import MainPageContent from './MainPageContent';
import { Pages } from '../../../helpers/helpers';
import FlipFindPage from '../FlipFindPage/FlipFindPage';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import { fadeIn } from '../../FlipFindGame/BoxOfCards';
import { CustomTypography } from '../../../helpers/CustomTypography';

export interface MainPageProps {
  setIsFloatingBackGround: Function;
  setIsMainPage: Function;
  setIsAnimating: Function;
  setIsFlipFindPage: Function;
  isAnimating: boolean;
  isMainPage: boolean;
  isFlipFindPage: boolean;
}

const MainPage: React.FC<MainPageProps> = ({
  setIsFloatingBackGround,
  setIsMainPage,
  setIsAnimating,
  setIsFlipFindPage,
  isAnimating,
  isMainPage,
  isFlipFindPage,
}) => {
  // const [isMainPage, setIsMainPage] = useState<boolean>(true);
  // const [isFlipFindPage, setIsFlipFindPage] = useState<boolean>(false);
  // const [isMissingItemPage, setIsMissingItemPage] = useState<boolean>(false);
  // const [isCardRecallPage, setIsCardRecallPage] = useState<boolean>(false);
  // const [isSequenceMasterPage, setIsSequenceMasterPage] = useState<boolean>(false);

  // const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [newPage, setnewPage] = useState<Pages>('Flip & Find');

  const [isFlipFindGameStarted, setIsFlipFindGameStarted] = useState<boolean>(false);

  const openGamePage = (page: Pages) => {
    setIsMainPage(false);
    setIsAnimating(true);
    setnewPage(page);
    if (page === 'Flip & Find') {
      setIsFlipFindPage(true);
    }
    // else if (page === 'Missing Item') {
    //   setIsMissingItemPage(true);
    // } else if (page === 'Card Recall') {
    //   setIsCardRecallPage(true);
    // } else if (page === 'Sequence Master') {
    //   setIsSequenceMasterPage(true);
    // }
  };

  const closeGame = () => {
    setIsFloatingBackGround(true);
    setIsFlipFindGameStarted(false);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Header
        newPage={newPage}
        isAnimating={isAnimating}
        setIsFlipFindPage={setIsFlipFindPage}
        setIsAnimating={setIsAnimating}
        isMainPage={isMainPage}
        setIsMainPage={setIsMainPage}
        setIsFlipFindGameStarted={setIsFlipFindGameStarted}
        setIsFloatingBackGround={setIsFloatingBackGround}
      />

      <MainPageContent isMainPage={isMainPage} isAnimating={isAnimating} openGamePage={openGamePage} />

      <FlipFindPage
        isFlipFindPage={isFlipFindPage}
        isAnimating={isAnimating}
        setIsFloatingBackGround={setIsFloatingBackGround}
        isFlipFindGameStarted={isFlipFindGameStarted}
        setIsFlipFindGameStarted={setIsFlipFindGameStarted}
      />

      {isFlipFindGameStarted && (
        <Box
          onClick={closeGame}
          sx={{
            position: 'fixed',
            // bottom: numOfCards === 12 || numOfCards === 18 ? '2%' : '15%',
            // left: numOfCards === 12 ? '15%' : '10%',
            bottom: '7%',
            right: '10%',
            animation: `${fadeIn} 1s ease-in forwards`,
            transition: 'transform 0.4s',
            cursor: 'pointer',
            '&:hover': {
              transform: 'scale(1.2)',
            },
          }}
        >
          <MeetingRoomRoundedIcon
            sx={{
              width: '3rem',
              height: '3rem',
              color: '#A55946',
            }}
          />
          <CustomTypography variant="h6" sx={{ color: '#A55946' }}>
            Exit
          </CustomTypography>
        </Box>
      )}
    </Grid>
  );
};

export default MainPage;
