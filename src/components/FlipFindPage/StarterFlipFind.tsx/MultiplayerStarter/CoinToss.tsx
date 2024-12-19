import { Box, Grid, keyframes } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';

const flipCoinKeyframes = (degrees: number) => keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(${degrees}deg); }
`;

const scaleCoin = keyframes`
  0% { transform: scale(1); }
  88% { transform: scale(1.25); }
  92% { transform: scale(1.3); }
  97% { transform: scale(1.3); }
  100% { transform: scale(1.25); }
`;

export interface CoinTossProps {
  startGame: Function;
  setIsMultiplayerStarterPage: Function;
  setIsLeftPlayersTurn: Function;
  isDisabled: boolean;
  setIsDisabled: Function;
  isCancelledGame: boolean;
  setIsCancelledGame: Function;
}

const CoinToss: React.FC<CoinTossProps> = ({
  startGame,
  setIsMultiplayerStarterPage,
  setIsLeftPlayersTurn,
  isDisabled,
  setIsDisabled,
  isCancelledGame,
  setIsCancelledGame,
}) => {
  const [flipCoinAnimation, setFlipCoinAnimation] = useState<string>(flipCoinKeyframes(0));
  const [isHeads] = useState<boolean>(Math.random() < 0.5);
  const [isFlipToTheSameSide] = useState<boolean>(Math.random() > 0.5);

  const coinToss = () => {
    if (!isDisabled) {
      setIsCancelledGame(false);
      setIsDisabled(true);
      setFlipCoinAnimation(flipCoinKeyframes(isFlipToTheSameSide ? 1080 : 900));
    }
  };

  const backToMainStarter = () => {
    setIsMultiplayerStarterPage(false);
    setIsLeftPlayersTurn(null);
    setIsCancelledGame(true);
  };

  useEffect(() => {
    setIsCancelledGame(true);
  }, []);

  useEffect(() => {
    const result = isHeads === isFlipToTheSameSide ? true : false;

    const timeoutForCoinResult = setTimeout(
      () => {
        if (!isCancelledGame) {
          setIsLeftPlayersTurn(result);
        }
      },
      isFlipToTheSameSide ? 2400 : 2000
    );

    const timeoutForGameStart = setTimeout(() => {
      if (!isCancelledGame) {
        startGame();
      }
    }, 4500);

    return () => {
      clearTimeout(timeoutForCoinResult);
      clearTimeout(timeoutForGameStart);
    };
  }, [isCancelledGame]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'fit-content',
      }}
    >
      <Box
        onClick={coinToss}
        sx={{
          cursor: isDisabled ? 'auto' : 'pointer',
          transform: isDisabled ? `scale(1.25)` : 'none',
          animation: isDisabled ? `${scaleCoin} ${isFlipToTheSameSide ? 2.4 : 2}s linear` : 'none',
        }}
      >
        <Box
          sx={{
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <Box
            sx={{
              width: '8rem',
              height: '8rem',
              alignItems: 'center',
              justifyContent: 'center',
              transformStyle: 'preserve-3d',
              animation: `${flipCoinAnimation} ${isFlipToTheSameSide ? 2.4 : 2}s ease-out forwards`,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                backfaceVisibility: 'hidden',
                backgroundColor: '#824131',
                color: '#EAE1DF',
                transform: isHeads ? '' : 'rotateY(-180deg)',
              }}
            >
              <PsychologyAltRoundedIcon sx={{ width: '6rem', height: '6rem' }} />
            </Box>

            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                backfaceVisibility: 'hidden',
                backgroundColor: '#D2C1BD',
                color: '#824131',
                transform: isHeads ? 'rotateY(-180deg)' : '',
              }}
            >
              <PetsRoundedIcon sx={{ width: '5rem', height: '5rem' }} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          onClick={backToMainStarter}
          sx={{
            cursor: 'pointer',
            px: '2rem',
            maxWidth: { md: '18rem', xl: '20rem' },
            display: 'flex',
            mb: '4rem',
            height: '5rem',
            backgroundColor: '#D2C1BD',
            borderRadius: '50px',
            color: '#7B4234',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <CustomTypography variant="h4">{isDisabled ? 'Cancel' : 'Go Back'}</CustomTypography>
        </Box>
      </Box>
    </Box>
  );
};

export default CoinToss;
