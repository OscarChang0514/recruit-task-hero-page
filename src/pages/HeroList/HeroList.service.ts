import Api from "src/service/api";
import { Hero } from "./HeroList.type";

export const HeroService = () => {

	const api = Api();

	return {
		getHeros: () => {
			return api.getJSON<Hero[]>(`https://hahow-recruit.herokuapp.com/heroes`)
		},
		getHeroById: (id: string) => {
			return api.getJSON<Hero>(`https://hahow-recruit.herokuapp.com/heroes/${id}`)
		},
	}
}