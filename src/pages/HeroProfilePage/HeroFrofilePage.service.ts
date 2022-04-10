import Api from "src/service/api";
import { Hero, Profile } from "src/types/hero.type";

export const HeroProfileService = () => {

    const api = Api();

    return {
        getHeroProfile: (id: string) => {
            return api.getJSON<Hero[]>(`https://hahow-recruit.herokuapp.com/heroes/${id}/profile`)
        },
        updateHeroProfile: (id: string, profile: Profile) => {
            return api.patch(`https://hahow-recruit.herokuapp.com/heroes/${id}/profile`, profile)
        }
    }
}