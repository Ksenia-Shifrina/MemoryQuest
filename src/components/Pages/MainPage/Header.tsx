import * as React from 'react';
import { CustomTypography } from '../../../helpers/CustomTypography';
import { Box, Divider, Grid } from '@mui/material';
import { useState } from 'react';

export interface HeaderProps {
  newPage: string;
  setIsFlipFindPage: Function;
  isAnimating: boolean;
  setIsAnimating: Function;
  isMainPage: boolean;
  setIsMainPage: Function;
  setIsFlipFindGameStarted: Function;
  setIsFloatingBackGround: Function;
}
const Header: React.FC<HeaderProps> = ({
  newPage,
  setIsFlipFindPage,
  setIsMainPage,
  setIsAnimating,
  isAnimating,
  isMainPage,
  setIsFlipFindGameStarted,
  setIsFloatingBackGround,
}) => {
  const backToMainPage = () => {
    setIsMainPage(true);
    setIsFlipFindPage(false);
    setIsAnimating(false);
    setIsFlipFindGameStarted(false);
    setIsFloatingBackGround(true);
  };

  const backToGameStarter = () => {
    setIsFloatingBackGround(true);
    setIsFlipFindGameStarted(false);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" position={'absolute'} top={0} left={0}>
      {/* <Box
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
          animation: isAnimating ? 'moveLoginLeftAwayAnimation 1s forwards' : 'moveLoginRightBackAnimation 1s forwards',
          '@keyframes moveLoginLeftAwayAnimation': {
            '0%': {
              transform: 'translateX(-35%) translateY(5vh) rotate(-10deg) scale(0.5)',
            },

            '100%': {
              transform: 'translateX(-55%) translateY(15vh) rotate(-50deg) scale(0)',
            },
          },
          '@keyframes moveLoginRightBackAnimation': {
            '0%': {
              transform: 'translateX(-55%) translateY(15vh) rotate(-50deg) scale(0)',
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
      </Box> */}

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
          animation: isAnimating ? 'moveMainLeftAnimation 1s forwards' : 'moveMainCenterAnimation 1s forwards',
          '@keyframes moveMainLeftAnimation': {
            '0%': {
              transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
            },

            '100%': {
              transform: 'translateX(-35%) translateY(5vh) rotate(-10deg) scale(0.5)',
            },
          },
          '@keyframes moveMainCenterAnimation': {
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
        onClick={backToGameStarter}
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
          animation: isAnimating ? 'moveNewPageCenterAnimation 1s forwards' : 'moveNewPageRightAnimation 1s forwards',
          '@keyframes moveNewPageCenterAnimation': {
            '0%': {
              transform: 'translateX(35%) translateY(10vh) scale(0) rotate(10deg)',
            },

            '100%': {
              transform: 'translateX(0) translateY(0) scale(1) rotate(0)',
            },
          },
          '@keyframes moveNewPageRightAnimation': {
            '0%': {
              transform: 'translateX(0) translateY(0) scale(1) rotate(0)',
            },

            '100%': {
              transform: 'translateX(35%) translateY(10vh) scale(0) rotate(10deg)',
            },
          },
        }}
      >
        {newPage}
      </CustomTypography>

      {/* <CustomTypography
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
          animation: isAnimating
            ? 'moveStatisticsLeftAnimation 1s forwards'
            : 'moveStatisticsRightAwayAnimation 1s forwards',
          '@keyframes moveStatisticsLeftAnimation': {
            '0%': {
              transform: 'translateX(55%) translateY(15vh) rotate(50deg) scale(0) ',
            },

            '100%': {
              transform: 'translateX(25%) translateY(5vh) rotate(10deg) scale(0.5)',
            },
          },
          '@keyframes moveStatisticsRightAwayAnimation': {
            '0%': {
              transform: 'translateX(25%) translateY(5vh) rotate(10deg) scale(0.5)',
            },

            '100%': {
              transform: 'translateX(55%) translateY(15vh) rotate(50deg) scale(0) ',
            },
          },
        }}
      >
        Statistics
      </CustomTypography> */}
    </Grid>
  );
};

export default Header;
