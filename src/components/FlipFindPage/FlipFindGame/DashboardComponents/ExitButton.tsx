import { Box } from '@mui/material';
import React from 'react';
import { fadeIn } from '../BoxOfCards';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';

import ReactDOM from 'react-dom';
import { CustomTypography } from '../../../../helpers/CustomTypography';

export interface ExitButtonProps {
  closeGame: Function;
  numOfCards: number;
}
const ExitButton: React.FC<ExitButtonProps> = ({ closeGame, numOfCards }) => {
  return ReactDOM.createPortal(
    <Box
      onClick={() => closeGame()}
      sx={{
        position: 'fixed',
        zIndex: 2,
        bottom:
          numOfCards === 12 || numOfCards === 18
            ? '10vh'
            : numOfCards === 16
            ? '10vh'
            : numOfCards === 25
            ? '3vh'
            : numOfCards === 36
            ? '5vh'
            : '3vh',
        right:
          numOfCards === 12
            ? '15vw'
            : numOfCards === 18
            ? '15vw'
            : numOfCards === 16
            ? '20vh'
            : numOfCards === 25
            ? '20vh'
            : numOfCards === 36
            ? '18vh'
            : '12vw',
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
          width: '3rem',
          height: '3rem',
          color: '#A55946',
        }}
      />
      <CustomTypography variant="h6" sx={{ color: '#A55946', textAlign: 'center' }}>
        Exit
      </CustomTypography>
    </Box>,
    document.body
  );
};

export default ExitButton;
