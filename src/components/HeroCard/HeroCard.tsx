import { HeroImg, StyledHeroCard } from './HeroCard.style';
import type { HeroCardProps } from './HeroCard.type';

const HeroCard: React.FC<HeroCardProps> = (props) => {
  return (
    <StyledHeroCard selected={props.selected} onClick={props.onCardClick}>
      <div>
        <HeroImg src={props.image} />
      </div>
      <h3>{props.name}</h3>
    </StyledHeroCard>
  );
};

HeroCard.defaultProps = {
  onCardClick: () => {}
}

export default HeroCard;
