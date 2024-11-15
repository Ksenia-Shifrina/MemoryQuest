import { Grid } from '@mui/material';
import { useState } from 'react';
import Header from './Header';
import MainPageContent from './MainPageContent';
import { Pages } from '../../../helpers/helpers';
import FlipFindPage from '../FlipFindPage/FlipFindPage';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';

export interface MainPageProps {
  setIsFloatingBackGround: Function;
}

const MainPage: React.FC<MainPageProps> = ({ setIsFloatingBackGround }) => {
  const [isMainPage, setIsMainPage] = useState<boolean>(true);
  const [isFlipFindPage, setIsFlipFindPage] = useState<boolean>(false);
  const [isMissingItemPage, setIsMissingItemPage] = useState<boolean>(false);
  const [isCardRecallPage, setIsCardRecallPage] = useState<boolean>(false);
  const [isSequenceMasterPage, setIsSequenceMasterPage] = useState<boolean>(false);

  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [newPage, setnewPage] = useState<Pages>('Flip & Find');

  const [isFlipFindGameStarted, setIsFlipFindGameStarted] = useState<boolean>(false);

  const openGamePage = (page: Pages) => {
    setIsMainPage(false);
    setIsAnimating(true);
    setnewPage(page);
    if (page === 'Flip & Find') {
      setIsFlipFindPage(true);
    } else if (page === 'Missing Item') {
      setIsMissingItemPage(true);
    } else if (page === 'Card Recall') {
      setIsCardRecallPage(true);
    } else if (page === 'Sequence Master') {
      setIsSequenceMasterPage(true);
    }
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
        <MeetingRoomRoundedIcon
          onClick={closeGame}
          sx={{
            position: 'fixed',
            // bottom: numOfCards === 12 || numOfCards === 18 ? '2%' : '15%',
            // left: numOfCards === 12 ? '15%' : '10%',
            bottom: '7%',
            left: '5%',
            width: '3rem',
            height: '3rem',
            color: '#A55946',
            cursor: 'pointer',
            transition: 'transform 0.4s',
            '&:hover': {
              transform: 'scale(1.2)',
            },
          }}
        />
      )}
    </Grid>
  );
};

export default MainPage;
