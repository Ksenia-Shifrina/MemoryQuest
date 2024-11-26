import { Box } from '@mui/material';
import React from 'react';
import { fadeIn } from './BoxOfCards';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';

export interface BottomLeftIconProps {
  closeGame: Function;
}
const BottomLeftIcon: React.FC<BottomLeftIconProps> = ({ closeGame }) => {
  return (
    <Box
      sx={{
        position: 'fixed', // Position relative to the viewport
        bottom: '0rem', // Distance from the bottom of the screen
        left: '1rem', // Distance from the left of the screen
        zIndex: 1000, // Ensures it stays on top of other elements
        // backgroundColor: 'white', // Optional styling
        // borderRadius: '50%',
        // padding: '0.5rem',
        // boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', // Optional shadow for emphasis
      }}
    >
      <MeetingRoomRoundedIcon
        onClick={() => closeGame()}
        sx={{
          width: '3rem',
          height: '3rem',
          color: '#A55946',
          cursor: 'pointer',
          animation: `${fadeIn} 1s ease-in forwards`,
          transition: 'transform 0.4s',
          '&:hover': {
            transform: 'scale(1.2)',
          },
        }}
      />
    </Box>
  );
};

export default BottomLeftIcon;
