import { Hero } from "src/types/hero.type";

export interface HeroListProps {
  heros: Hero[];
  onCardClick?: (index: number) => void;
}
