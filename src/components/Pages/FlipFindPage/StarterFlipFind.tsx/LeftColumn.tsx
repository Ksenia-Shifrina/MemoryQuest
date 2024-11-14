import { Box, Grid } from '@mui/material';
import { GameVariation, gameVariationArr } from '../../../../helpers/helpers';
import { CustomTypography } from '../../../../helpers/CustomTypography';

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
      <Grid container justifyContent="center" alignItems="flex-end" direction={'column'}>
        <Box
          sx={{
            position: 'relative',
            width: '70%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: '#7B4234',
          }}
        >
          <CustomTypography variant="h3" sx={{ fontWeight: 'bold', mb: '2rem' }}>
            Optional
          </CustomTypography>

          {gameVariationArr.map((option, index) => (
            <Box
              onClick={() => handleChangeGameOption(option)}
              key={index}
              sx={{
                position: 'relative',
                width: '50%',
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default LeftColumn;
