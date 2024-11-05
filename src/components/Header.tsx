import * as React from 'react';
import { CustomTypography } from '../helpers/CustomTypography';
import { Grid } from '@mui/material';

export interface HeaderProps {
  left: string;
  right: string;
  center: string;
  setIsPracticePage?: Function;
}
const Header: React.FC<HeaderProps> = ({ left, right, center, setIsPracticePage }) => {
  const handleClick = () => {
    if (setIsPracticePage) {
      setIsPracticePage(false);
    }
  };
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={3}>
        <CustomTypography
          onClick={handleClick}
          variant="h3"
          sx={{ color: '#7B4234', mt: '6rem', transform: 'rotate(-10deg)', cursor: 'pointer' }}
        >
          {left}
        </CustomTypography>
      </Grid>
      <Grid item xs={5}>
        <CustomTypography variant="h1" sx={{ color: '#7B4234', mt: '2rem', cursor: 'pointer' }}>
          {center}
        </CustomTypography>
      </Grid>
      <Grid item xs={3}>
        <CustomTypography
          variant="h3"
          sx={{ color: '#7B4234', mt: '6rem', transform: 'rotate(10deg)', cursor: 'pointer' }}
        >
          {right}
        </CustomTypography>
      </Grid>
    </Grid>
  );
};

export default Header;
