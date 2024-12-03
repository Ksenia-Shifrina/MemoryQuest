import { Box, Grid, keyframes } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';

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
}

const CoinToss: React.FC<CoinTossProps> = ({
  startGame,
  setIsMultiplayerStarterPage,
  setIsLeftPlayersTurn,
  isDisabled,
  setIsDisabled,
}) => {
  const [flipCoinAnimation, setFlipCoinAnimation] = useState<string>(flipCoinKeyframes(0));
  const [isHeads] = useState<boolean>(Math.random() < 0.5);
  const [isFlipToTheSameSide] = useState<boolean>(Math.random() > 0.5);

  const coinToss = () => {
    if (!isDisabled) {
      setIsDisabled(true);
      setFlipCoinAnimation(flipCoinKeyframes(isFlipToTheSameSide ? 1080 : 900));

      const result = isHeads === isFlipToTheSameSide ? true : false;
      setTimeout(
        () => {
          setIsLeftPlayersTurn(result);
        },
        isFlipToTheSameSide ? 2400 : 2000
      );

      setTimeout(() => {
        startGame();
      }, 4500);
    }
  };

  return (
    <Box
      sx={{
        mt: '3rem',
        pb: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
              width: '10rem',
              height: '10rem',
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
              <PetsRoundedIcon sx={{ width: '6rem', height: '6rem' }} />
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
          width: '40%',
          mt: '5rem',
        }}
      >
        {!isDisabled && (
          <Box
            onClick={() => setIsMultiplayerStarterPage(false)}
            sx={{
              cursor: isDisabled ? 'auto' : 'pointer',
              width: '35%',
              display: 'flex',
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
            <CustomTypography variant="h4">Go Back</CustomTypography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CoinToss;
