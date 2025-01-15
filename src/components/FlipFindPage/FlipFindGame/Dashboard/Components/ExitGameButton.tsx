import { Box, Grid } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { fadeIn } from '../../GameLogic/BoxOfCards';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import { CustomTypography } from '../../../../../helpers/CustomTypography';
import { GameOptions } from '../../../../../helpers/types';
import ReactDOM from 'react-dom';

export interface ExitGameButtonProps {
  closeGame: Function;
  numOfCards: number;
  gameOptions: GameOptions[];
}
const ExitGameButton: React.FC<ExitGameButtonProps> = ({ closeGame, numOfCards, gameOptions }) => {
  const endOfCardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (endOfCardsRef.current) {
        endOfCardsRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }
    }, 100);
  }, [gameOptions]);

  const getBottomMargin = (numOfCards: number) => {
    if (numOfCards === 36) {
      return { md: '4rem', lg: '6rem', xl: '5rem' };
    } else if (numOfCards === 25) {
      return { md: '4rem', xl: '3rem' };
    } else if (numOfCards === 16) {
      return { md: '3rem' };
    } else if (numOfCards === 12) {
      return { md: '2rem' };
    } else if (numOfCards === 18) {
      return { md: '2rem' };
    } else {
      return { md: '4rem' };
    }
  };

  return (
    <Grid
      ref={endOfCardsRef}
      sx={{
        position: 'absolute',
        left: '5vw',
        bottom: getBottomMargin(numOfCards),
      }}
    >
      <Box
        onClick={() => closeGame()}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          animation: `${fadeIn} 1s ease-in forwards`,
          transition: 'transform 0.2s',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <MeetingRoomRoundedIcon
          sx={{
            width: { md: '2rem', lg: '2.5rem', xl: '3rem' },
            height: { md: '2rem', lg: '2.5rem', xl: '3rem' },
            color: '#A55946',
          }}
        />
        <CustomTypography variant="h6" sx={{ color: '#A55946', textAlign: 'center' }}>
          Exit
        </CustomTypography>
      </Box>
    </Grid>
  );
};

export default ExitGameButton;
