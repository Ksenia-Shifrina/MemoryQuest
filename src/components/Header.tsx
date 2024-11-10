import * as React from 'react';
import { CustomTypography } from '../helpers/CustomTypography';
import { Box, Divider, Grid } from '@mui/material';
import { useState } from 'react';

export interface HeaderProps {
  newPage: string;
  setIsPracticePage: Function;
  isAnimating: boolean;
  setIsAnimating: Function;
  isMainPage: boolean;
  setIsMainPage: Function;
  isPracticePage: boolean;
  setIsMiniGameStarted: Function;
}
const Header: React.FC<HeaderProps> = ({
  newPage,
  setIsPracticePage,
  setIsMainPage,
  setIsAnimating,
  isAnimating,
  isMainPage,
  isPracticePage,
  setIsMiniGameStarted,
}) => {
  const backToMainPage = () => {
    setIsMainPage(true);
    setIsPracticePage(false);
    setIsAnimating(false);
    setIsMiniGameStarted(false);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" position={'absolute'} top={0} left={0}>
      <Box
        position={'absolute'}
        sx={{
          zIndex: 1,
          color: '#7B4234',
          mt: '2rem',
          cursor: 'pointer',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          animation: isAnimating ? 'moveVeryLeftAnimation 1s forwards' : 'moveBackAnimation 1s forwards',
          '@keyframes moveVeryLeftAnimation': {
            '0%': {
              transform: 'translateX(-35%) translateY(5vh) rotate(-10deg) scale(0.5)',
            },

            '100%': {
              transform: 'translateX(-55%) translateY(10vh) rotate(-50deg) scale(0)',
            },
          },
          '@keyframes moveBackAnimation': {
            '0%': {
              transform: 'translateX(-55%) translateY(10vh) rotate(-50deg) scale(0)',
            },

            '100%': {
              transform: 'translateX(-35%) translateY(5vh) rotate(-10deg) scale(0.5)',
            },
          },
        }}
      >
        <CustomTypography
          variant="h1"
          sx={{
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Log In
        </CustomTypography>
        <CustomTypography
          variant="h1"
          sx={{
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Sign Up
        </CustomTypography>
      </Box>

      <CustomTypography
        onClick={backToMainPage}
        variant="h1"
        position={'absolute'}
        sx={{
          zIndex: 3,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          color: '#7B4234',
          mt: '2rem',
          cursor: 'pointer',
          animation: isAnimating ? 'moveLeftAnimation 1s forwards' : 'moveToCenterAnimation 1s forwards',
          '@keyframes moveLeftAnimation': {
            '0%': {
              transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
            },

            '100%': {
              transform: 'translateX(-35%) translateY(5vh) rotate(-10deg) scale(0.5)',
            },
          },
          '@keyframes moveToCenterAnimation': {
            '0%': {
              transform: 'translateX(-35%) translateY(5vh) rotate(-10deg) scale(0.5) ',
            },

            '100%': {
              transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
            },
          },
        }}
      >
        Memory Games
      </CustomTypography>
      <CustomTypography
        onClick={() => setIsMiniGameStarted(false)}
        variant="h1"
        position={'absolute'}
        sx={{
          zIndex: 2,
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          color: '#7B4234',
          mt: '2rem',
          cursor: 'pointer',
          opacity: isMainPage ? 0 : 1,
          transition: 'opacity 1s ease-in',
          animation: isAnimating ? 'moveDiffLeftAnimation 1s forwards' : 'moveToRightAnimation 1s forwards',
          '@keyframes moveDiffLeftAnimation': {
            '0%': {
              transform: 'translateX(35%) translateY(5vh) scale(0) rotate(10deg)',
            },

            '100%': {
              transform: 'translateX(0) translateY(0) scale(1) rotate(0)',
            },
          },
          '@keyframes moveToRightAnimation': {
            '0%': {
              transform: 'translateX(0) translateY(0) scale(1) rotate(0)',
            },

            '100%': {
              transform: 'translateX(35%) translateY(5vh) scale(0) rotate(10deg)',
            },
          },
        }}
      >
        {newPage}
      </CustomTypography>

      <CustomTypography
        variant="h1"
        position={'absolute'}
        sx={{
          zIndex: 1,
          color: '#7B4234',
          mt: '2rem',
          cursor: 'pointer',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          animation: isAnimating ? 'moveAnimation 1s forwards' : 'moveAwayAnimation 1s forwards',
          '@keyframes moveAnimation': {
            '0%': {
              transform: 'translateX(55%) translateY(10vh) rotate(50deg) scale(0) ',
            },

            '100%': {
              transform: 'translateX(25%) translateY(5vh) rotate(10deg) scale(0.5)',
            },
          },
          '@keyframes moveAwayAnimation': {
            '0%': {
              transform: 'translateX(25%) translateY(5vh) rotate(10deg) scale(0.5)',
            },

            '100%': {
              transform: 'translateX(55%) translateY(10vh) rotate(50deg) scale(0) ',
            },
          },
        }}
      >
        Statistics
      </CustomTypography>
    </Grid>
  );
};

export default Header;
