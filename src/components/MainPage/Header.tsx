import * as React from 'react';
import { CustomTypography } from '../../helpers/CustomTypography';
import { Box, Grid } from '@mui/material';
import {
  firstAppearanceAnimation,
  moveMainCenterFromLeft,
  moveMainLeftFromCenter,
  moveGamePageCenterFromRight,
  moveGamePageRightFromCenter,
  // moveLoginLeftAway,
  // moveLoginRightToView,
  // moveStatisticsLeftToView,
  // moveStatisticsRightAway,
} from './HeaderKeyframes';
import { Pages } from '../../helpers/types';
import HeaderWrapper from './HeaderWrapper';

export interface HeaderProps {
  currentPage: Pages;
  isMovingMainPageLeft: boolean;
  isFlipFindGameStarted: boolean;
  isFirstTimeAnimating: boolean;
  backToMainPage: Function;
  backToGameStarter: Function;
  openedGamePage: Pages;
}

const Header: React.FC<HeaderProps> = ({
  currentPage,
  isMovingMainPageLeft,
  isFlipFindGameStarted,
  isFirstTimeAnimating,
  backToMainPage,
  backToGameStarter,
  openedGamePage,
}) => {
  return (
    <Grid container justifyContent="center" alignItems="center" position={'absolute'} top={0} left={0} zIndex={2}>
      {/* <HeaderWrapper
        sx={{
          cursor: 'pointer',
          animation: `${isMovingMainPageLeft ? moveLoginLeftAway : moveLoginRightToView} 1s forwards`,
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
      </HeaderWrapper> */}

      <HeaderWrapper
        sx={{
          animation: `${
            isMovingMainPageLeft
              ? moveMainLeftFromCenter
              : isFirstTimeAnimating
              ? firstAppearanceAnimation
              : moveMainCenterFromLeft
          } 1s forwards`,
        }}
      >
        <CustomTypography
          onClick={() => backToMainPage()}
          variant="h1"
          sx={{
            '&:hover': {
              transform: currentPage === 'Memory Games' ? 'none' : 'scale(1.1)',
            },
            transition: 'transform 0.2s',
            cursor: currentPage === 'Memory Games' ? 'default' : 'pointer',
          }}
        >
          Memory Games
        </CustomTypography>
      </HeaderWrapper>

      <HeaderWrapper
        position={'absolute'}
        sx={{
          opacity: currentPage === 'Memory Games' ? 0 : 1,
          transition: 'opacity 1s ease-in',
          animation: `${isMovingMainPageLeft ? moveGamePageCenterFromRight : moveGamePageRightFromCenter} 1s forwards`,
        }}
      >
        <CustomTypography
          onClick={isFlipFindGameStarted ? () => backToGameStarter() : undefined}
          variant="h1"
          sx={{
            '&:hover': {
              transform: isFlipFindGameStarted ? 'scale(1.05)' : 'none',
            },
            transition: 'transform 0.2s',
            cursor: isFlipFindGameStarted ? 'pointer' : 'default',
          }}
        >
          {openedGamePage}
        </CustomTypography>
      </HeaderWrapper>

      {/* <HeaderWrapper
        sx={{
          cursor: 'pointer',
          animation: `${isMovingMainPageLeft ? moveStatisticsLeftToView : moveStatisticsRightAway} 1s forwards`,
        }}
      >
        <CustomTypography
          variant="h1"
          sx={{
            '&:hover': {
              transform: currentPage === 'Memory Games' ? 'none' : 'scale(1.1)',
            },
            transition: 'transform 0.2s',
            cursor: 'pointer',
          }}
        >
          Statistics
        </CustomTypography>
      </HeaderWrapper> */}
    </Grid>
  );
};

export default Header;
