import { Box, Input } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';

export interface NicknameInputProps {
  nickname: string;
  isThisPlayersTurn: boolean | null;
  handleChangeNicknames: Function;
}
const NicknameInput: React.FC<NicknameInputProps> = ({ nickname, isThisPlayersTurn, handleChangeNicknames }) => {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        width: '70%',
        height: '15rem',
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
      <CustomTypography variant="h3">First Player</CustomTypography>
      <Input
        required
        value={nickname}
        onChange={(event) => handleChangeNicknames(event, 0)}
        inputProps={{
          maxLength: 11,
          style: {
            marginTop: '1rem',
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: '3rem',
            fontFamily: 'Itim',
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
          width: '70%',
        }}
      />
    </Box>
  );
};

export default NicknameInput;
