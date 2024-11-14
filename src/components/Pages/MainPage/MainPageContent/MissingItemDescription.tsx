import { Box } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';

export interface MissingItemDescriptionProps {}

const MissingItemDescription: React.FC<MissingItemDescriptionProps> = ({}) => {
  return (
    <Box sx={{ mt: '2rem' }}>
      <CustomTypography variant="h4" sx={{ textDecoration: 'underline' }}>
        Coming soon!
      </CustomTypography>
    </Box>
  );
};

export default MissingItemDescription;
