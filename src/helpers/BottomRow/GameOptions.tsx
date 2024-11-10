import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../helpers/CustomTypography';
import { DifficultyLevel, GameVariation, gameVariationArr, PlayersVariation } from '../../helpers/helpers';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

export interface GameOptionsProps {
  // isDisplayGameOptions: boolean;
  setGameVariation: Function;
  gameVariation: GameVariation;
  // setIsDisplayGameOptions: Function;
}

const GameOptions: React.FC<GameOptionsProps> = ({
  // isDisplayGameOptions,
  setGameVariation,
  gameVariation,
  // setIsDisplayGameOptions,
}) => {
  const selectGameVariation = (game: GameVariation) => {
    setGameVariation(game);
    // setIsDisplayGameOptions(false);
  };

  return (
    <Grid item xs={3} mx={'2rem'}>
      <Grid container direction={'column'} alignItems={'center'}>
        {gameVariationArr.map((game, index) => (
          <Box
            onClick={() => selectGameVariation(game)}
            key={index}
            sx={{
              position: 'relative',
              width: '70%',
              height: '4rem',
              cursor: 'pointer',
              backgroundColor: game === gameVariation ? '#824131' : '#A48F8A',
              borderRadius: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              color: '#FFFFFF',

              mb: '1rem',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <CustomTypography variant="h4">{game}</CustomTypography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default GameOptions;
