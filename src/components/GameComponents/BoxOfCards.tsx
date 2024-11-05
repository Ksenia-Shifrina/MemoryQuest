import Grid from '@mui/material/Grid';
import FlippingCard from './FlippingCard';
import { FlippingCardType } from '../../helpers/helpers';

export interface BoxOfCardsProps {
  cards: FlippingCardType[];
  setCards: Function;
  checkCard: Function;
}

const BoxOfCards: React.FC<BoxOfCardsProps> = ({ cards, setCards, checkCard }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-evenly"
      alignItems="center"
      p={{ xs: '1rem', sm: '2remç', md: '4rem' }}
    >
      {cards.map((card, index) => (
        <Grid item key={index} xs={2} lg={3} justifyContent="center" alignItems="center">
          <FlippingCard card={card} setCards={setCards} index={index} checkCard={checkCard} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BoxOfCards;
