import { Hero } from "src/pages/HeroList/HeroList.type";

export interface HeroCardProps extends Hero {
  selected?: boolean;
  onCardClick?: () => void;
}
