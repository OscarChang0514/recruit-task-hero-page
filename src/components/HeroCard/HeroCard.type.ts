import { Hero } from "src/types/hero.type";


export interface HeroCardProps extends Hero {
  selected?: boolean;
  onCardClick?: () => void;
}
