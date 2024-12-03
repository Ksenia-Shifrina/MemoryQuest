import { CustomTypography } from '../../../../helpers/CustomTypography';
import CardWrapper from './CardWrapper';

export interface TimerCardProps {
  seconds: number;
  isMultiplayer: boolean;
}

const TimerCard: React.FC<TimerCardProps> = ({ seconds, isMultiplayer }) => {
  return (
    <CardWrapper
      sx={{
        color: '#7B4234',
        backgroundColor: isMultiplayer ? 'transparent' : '#D2C1BD',
      }}
    >
      <CustomTypography variant="h2">
        {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? 0 : ''}
        {seconds % 60}
      </CustomTypography>
    </CardWrapper>
  );
};

export default TimerCard;
