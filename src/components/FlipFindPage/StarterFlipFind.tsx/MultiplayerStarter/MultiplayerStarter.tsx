import { Box, Grid, Input, TextField } from '@mui/material';
import CoinToss from './CoinToss';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { useState } from 'react';
import NicknameInput from './NicknameInput';

export interface MultiplayerStarterProps {
  setNicknames: Function;
  setIsLeftPlayersTurn: Function;
  nicknames: string[];
  setIsMultiplayerStarterPage: Function;
  startGame: Function;
  isLeftPlayersTurn: boolean | null;
}

const MultiplayerStarter: React.FC<MultiplayerStarterProps> = ({
  setNicknames,
  isLeftPlayersTurn,
  setIsLeftPlayersTurn,
  startGame,
  nicknames,
  setIsMultiplayerStarterPage,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChangeNicknames = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    setNicknames((prevState: string[]) => {
      const updatedNicknames = [...prevState];
      updatedNicknames[index] = event.target.value;
      return updatedNicknames;
    });
  };

  return (
    <Grid container sx={{ direction: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Grid item md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <NicknameInput
          nickname={nicknames[0]}
          isThisPlayersTurn={isLeftPlayersTurn === null ? null : isLeftPlayersTurn}
          handleChangeNicknames={handleChangeNicknames}
        />
      </Grid>

      <Grid item md={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CustomTypography variant="h4" sx={{ color: '#7B4234', mt: '1rem' }}>
          toss the coin & see who starts the game
        </CustomTypography>
      </Grid>

      <Grid item md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <NicknameInput
          nickname={nicknames[1]}
          isThisPlayersTurn={isLeftPlayersTurn === null ? null : !isLeftPlayersTurn}
          handleChangeNicknames={handleChangeNicknames}
        />
      </Grid>

      <Grid item md={12}>
        <CoinToss
          startGame={startGame}
          setIsMultiplayerStarterPage={setIsMultiplayerStarterPage}
          setIsLeftPlayersTurn={setIsLeftPlayersTurn}
          setIsDisabled={setIsDisabled}
          isDisabled={isDisabled}
        />
      </Grid>
    </Grid>
  );
};

export default MultiplayerStarter;
