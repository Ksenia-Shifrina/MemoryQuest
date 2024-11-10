import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../helpers/CustomTypography';
import { GameOptions, GameVariation, gameVariationArr } from '../../../helpers/helpers';

export interface LeftColumnProps {
  gameOptions: GameVariation[];
  setGameOptions: Function;
}

const LeftColumn: React.FC<LeftColumnProps> = ({ gameOptions, setGameOptions }) => {
  const handleChangeGameOption = (option: GameVariation) => {
    if (!gameOptions.includes(option)) {
      setGameOptions((prevState: GameVariation[]) => [...prevState, option]);
    } else {
      const updatedArray = gameOptions.filter((o) => o !== option);
      setGameOptions(updatedArray);
    }
  };

  return (
    <Grid item xs={4}>
      <Grid container justifyContent="space-evenly" alignItems="center" direction={'column'}>
        <Grid item xs={2}>
          <Box
            sx={{
              position: 'relative',
              width: '70%',
              height: '5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              color: '#7B4234',
            }}
          >
            <CustomTypography variant="h3" sx={{ fontWeight: 'bold' }}>
              Optional
            </CustomTypography>
          </Box>
        </Grid>

        <Grid item xs={6}>
          {gameVariationArr.map((option, index) => (
            <Box
              onClick={() => handleChangeGameOption(option)}
              key={index}
              sx={{
                position: 'relative',
                width: '100%',
                height: '4rem',
                cursor: 'pointer',
                backgroundColor: gameOptions.includes(option) ? '#824131' : '#A48F8A',
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
              <CustomTypography variant="h4">{option}</CustomTypography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LeftColumn;
