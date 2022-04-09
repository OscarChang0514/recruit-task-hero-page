import { Hero } from "src/types/hero.type";


export interface HeroCardProps extends Hero {
  onCardClick?: () => void;
}
