import { Profile } from "src/types/hero.type";

export const getProfileRemainPoint = (profile: Profile) => {
    return profile ?
    Object.values(profile).reduce((sum, current) => sum - current, profile.total * 2) : 0;
  
};