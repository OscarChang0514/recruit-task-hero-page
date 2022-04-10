
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router';
import HeroList from 'src/components/HeroList';
import { Hero } from 'src/types/hero.type';
import { HeroService } from './HeroListPage.service';
import { StyledHeroListPage } from './HeroListPage.style';
import type { HeroListPageProps } from './HeroListPage.type';

const HeroListPage: React.FC<HeroListPageProps> = (props) => {

  const $heroService = HeroService();

  const navigate = useNavigate();

  const { heroId } = useParams();

  const [heros, setHeros] = useState<Hero[]>([]);

  useEffect(() => {
    $heroService.getHeros().subscribe(res => {
      setHeros(res.response)
    })
  }, [])

  return (
    <>
    <h2>Heros</h2>
    <HeroList 
      heros={heros} 
      selectedIndex={heros.findIndex((hero) => hero.id === heroId)}
      onCardClick={index => navigate(heros[index].id)} 
    />
    <Outlet />
    </>
  );
};

export default HeroListPage;
