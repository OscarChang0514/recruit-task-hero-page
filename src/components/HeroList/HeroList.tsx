import HeroCard from '../HeroCard';
import { StyledHeroList } from './HeroList.style';
import type { HeroListProps } from './HeroList.type';

const HeroList: React.FC<HeroListProps> = (props) => {
  return ( 
    <StyledHeroList>
      {props.heros.map((hero, index) => 
        <HeroCard {...hero} onCardClick={() => props.onCardClick(index)} />
      )}
    </StyledHeroList>
  );
};

HeroList.defaultProps = {
  onCardClick: () => {}
}

export default HeroList;
