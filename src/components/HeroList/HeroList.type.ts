import { Hero } from "src/types/hero.type";

export interface HeroListProps {
  heros: Hero[];
  selectedIndex?: number;
  onCardClick?: (index: number) => void;
}
