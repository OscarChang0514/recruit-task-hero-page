import { Profile } from "src/types/hero.type";

export interface HeroProfileProps {
  profile: Profile;
  onProfileChange?: (profile: Profile) => void;
}
