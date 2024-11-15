import { Box } from '@mui/material';
import { GameVariation, PlayersVariation } from '../../helpers/helpers';
import { CustomTypography } from '../../helpers/CustomTypography';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

export interface RotatingBoxDashboardProps {
  gameOptions: GameVariation[];
  playersNum: PlayersVariation;
  isLeftPlayer: boolean;
  isRotatingLeft: boolean;
  rotate: Function;
  attempts: number;
  actualNumOfCards: number;
  score: number;
  nickname: string;
  seconds: number;
  isLeft: boolean;
}
const RotatingBoxDashboard: React.FC<RotatingBoxDashboardProps> = ({
  gameOptions,
  playersNum,
  isLeftPlayer,
  isRotatingLeft,
  rotate,
  attempts,
  actualNumOfCards,
  score,
  nickname,
  seconds,
  isLeft,
}) => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      sx={{
        flexDirection: 'column',
        position: 'absolute',
        bottom: '75%',
        left: isLeft ? '7rem' : '',
        right: !isLeft ? '7rem' : '',
        width: '18rem',
        height: '8rem',
      }}
    >
      {playersNum === 'Multiplayer' && (
        <Box
          sx={{
            width: '18rem',
            height: '8rem',
            backgroundColor: isLeftPlayer ? '#824131' : '#D2C1BD',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: isLeftPlayer ? '#FFFFFF' : '#643529',
            transform: isLeftPlayer ? 'scale(1.1)' : 'none',
            transition: 'background-color 0.3s ease-in-out, transform 0.5s',
          }}
        >
          <CustomTypography variant="h5" sx={{ fontWeight: 'bold' }}>
            {nickname}
          </CustomTypography>
          <CustomTypography variant="h5">Attempts: {attempts}</CustomTypography>
          <CustomTypography variant="h5">
            Found {score} / {gameOptions.includes('Triples') ? actualNumOfCards / 3 : actualNumOfCards / 2}{' '}
            {gameOptions.includes('Triples') ? 'triples' : 'pairs'}
          </CustomTypography>
        </Box>
      )}

      {playersNum === 'Single' && (
        <Box
          sx={{
            width: '18rem',
            height: '8rem',
            backgroundColor: '#D2C1BD',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: '#643529',
          }}
        >
          {isLeft && (
            <Box>
              <CustomTypography variant="h5">Attempts: {attempts}</CustomTypography>
              <CustomTypography variant="h5" mt={'0.5rem'}>
                Found {score} / {gameOptions.includes('Triples') ? actualNumOfCards / 3 : actualNumOfCards / 2}{' '}
                {gameOptions.includes('Triples') ? 'triples' : 'pairs'}
              </CustomTypography>
            </Box>
          )}
          {!isLeft && (
            <CustomTypography variant="h2">
              {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? 0 : ''}
              {seconds % 60}
            </CustomTypography>
          )}
        </Box>
      )}

      {isRotatingLeft === isLeft && (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            transform: isLeft ? '' : 'scaleX(-1)',
          }}
        >
          <RefreshRoundedIcon
            onClick={() => rotate()}
            sx={{
              width: '4rem',
              height: '4rem',
              color: '#A55946',
              cursor: 'pointer',
              mt: '3rem',
              transition: 'transform 0.4s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default RotatingBoxDashboard;
