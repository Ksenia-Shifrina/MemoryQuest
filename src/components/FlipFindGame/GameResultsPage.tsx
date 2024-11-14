import { Box, Grid } from '@mui/material';

export interface GameResultsPageProps {
  seconds: number;
  attempts: number;
  setIsFlipFindGameStarted: Function;
  setIsFloatingBackGround: Function;
}

const GameResultsPage: React.FC<GameResultsPageProps> = ({
  seconds,
  attempts,
  setIsFlipFindGameStarted,
  setIsFloatingBackGround,
}) => {
  const finishGame = () => {
    setIsFloatingBackGround(true);
    setIsFlipFindGameStarted(false);
  };

  return (
    <Grid container>
      <Grid>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '4rem',
            cursor: 'pointer',
            backgroundColor: '#A48F8A',
            borderRadius: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            color: '#FFFFFF',
            p: '0.5rem',

            mb: '1rem',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          {' '}
          Time: {seconds}
          Attempts: {attempts}
        </Box>
      </Grid>
      <Grid>
        {' '}
        <Box
          onClick={finishGame}
          sx={{
            position: 'relative',
            width: '100%',
            height: '4rem',
            cursor: 'pointer',
            backgroundColor: '#A48F8A',
            borderRadius: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            color: '#FFFFFF',
            p: '0.5rem',

            mb: '1rem',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          {' '}
          Back to Mini-Games
        </Box>
      </Grid>
    </Grid>
  );
};

export default GameResultsPage;
