import { StyledHeroCard } from './HeroCard.style';
import type { HeroCardProps } from './HeroCard.type';

const HeroCard: React.FC<HeroCardProps> = (props) => {
  return (
    <StyledHeroCard onClick={props.onCardClick}>
      <div>
        <img src={props.image} />
      </div>
      <span>{props.name}</span>
    </StyledHeroCard>
  );
};

HeroCard.defaultProps = {
  onCardClick: () => {}
}

export default HeroCard;
