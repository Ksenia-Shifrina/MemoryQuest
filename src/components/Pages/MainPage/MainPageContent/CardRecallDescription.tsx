import { Box } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';

export interface CardRecallDescriptionProps {}

const CardRecallDescription: React.FC<CardRecallDescriptionProps> = ({}) => {
  return (
    <Box sx={{ mt: '2rem' }}>
      <CustomTypography variant="h4" sx={{ textDecoration: 'underline' }}>
        In progress!
      </CustomTypography>
    </Box>
  );
};

export default CardRecallDescription;
