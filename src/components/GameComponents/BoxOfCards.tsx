import Grid from '@mui/material/Grid';
import FlippingCard from './FlippingCard';
import { FlippingCardType, GameVariation } from '../../helpers/helpers';
import { keyframes } from '@mui/material';

export interface BoxOfCardsProps {
  cards: FlippingCardType[];
  setCards: Function;
  checkCard: Function;
  gameOptions: GameVariation[];
}

const rotate = keyframes`
  0% { transform: rotate(0) ; }
  // 50% { transform: rotate(180); }
  100% { transform: rotate(360deg); }
`;

const BoxOfCards: React.FC<BoxOfCardsProps> = ({ cards, setCards, checkCard, gameOptions }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-evenly"
      alignItems="center"
      p={{
        xs: '1rem',
        sm: '2remç',
        md: '4rem',
      }}
      sx={{
        animation: gameOptions.includes('Moving') ? `${rotate} 40s linear infinite` : 'none',
        mt: gameOptions.includes('Moving') ? '4rem' : 'none',
      }}
    >
      {cards.map((card, index) => (
        <Grid item key={index} xs={2} lg={2.4} justifyContent="center" alignItems="center">
          <FlippingCard card={card} setCards={setCards} index={index} checkCard={checkCard} gameOptions={gameOptions} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BoxOfCards;
