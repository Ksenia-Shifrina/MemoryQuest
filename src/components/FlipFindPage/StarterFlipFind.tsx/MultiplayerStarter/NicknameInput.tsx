import { Box, Input } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';

export interface NicknameInputProps {
  nickname: string;
  isThisPlayersTurn: boolean | null;
  handleChangeNicknames: Function;
  isLeftInput: boolean;
}
const NicknameInput: React.FC<NicknameInputProps> = ({
  nickname,
  isThisPlayersTurn,
  handleChangeNicknames,
  isLeftInput,
}) => {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        width: '100%',
        maxWidth: '30rem',
        height: '14rem',
        mx: '2rem',
        backgroundColor: isThisPlayersTurn ? '#824131' : '#A48F8A',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        transform: isThisPlayersTurn ? 'scale(1.1)' : 'none',
        transition: 'transform 1s ease',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CustomTypography
          sx={{ fontSize: { md: '2.3rem', lg: '2.8rem', xl: '3rem' }, mr: { md: '0.5rem', lg: '1rem' } }}
        >
          {isLeftInput ? 'First' : 'Second'} Player
        </CustomTypography>
        {isLeftInput && <PsychologyAltRoundedIcon sx={{ width: '3rem', height: '3rem' }} />}
        {!isLeftInput && <PetsRoundedIcon sx={{ width: '3rem', height: '3rem' }} />}
      </Box>

      <Input
        required
        value={nickname}
        onChange={(event) => handleChangeNicknames(event, isLeftInput ? 0 : 1)}
        inputProps={{
          maxLength: 15,
          sx: {
            marginTop: '1rem',
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: { md: '2.5rem', lg: '3rem', xl: '3.3rem' },
            fontFamily: 'Poiret One',
          },
        }}
        sx={{
          '&::before': {
            borderBottom: '1px solid #655B58',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '1.5px solid #7D726F',
          },
          '&.Mui-focused:after': {
            borderBottom: '1.5px solid #655B58',
          },
          width: { md: '80%', lg: '75%' },
        }}
      />
    </Box>
  );
};

export default NicknameInput;
