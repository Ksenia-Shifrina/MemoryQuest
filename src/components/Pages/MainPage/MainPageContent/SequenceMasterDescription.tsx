import { Box } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';

export interface SequenceMasterDescriptionProps {}

const SequenceMasterDescription: React.FC<SequenceMasterDescriptionProps> = ({}) => {
  return (
    <Box sx={{ mt: '2rem' }}>
      <CustomTypography variant="h4" sx={{ textDecoration: 'underline' }}>
        In progress!
      </CustomTypography>
    </Box>
  );
};

export default SequenceMasterDescription;
