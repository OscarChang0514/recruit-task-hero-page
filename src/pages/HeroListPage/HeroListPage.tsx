
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router';
import HeroList from 'src/components/HeroList';
import LoadingBlock from 'src/components/LoadingBlock';
import { Hero } from 'src/types/hero.type';
import { HeroService } from './HeroListPage.service';
import type { HeroListPageProps } from './HeroListPage.type';

const HeroListPage: React.FC<HeroListPageProps> = (props) => {

  const $heroService = HeroService();

  const navigate = useNavigate();

  const { heroId } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [heros, setHeros] = useState<Hero[]>([]);

  useEffect(() => {
    setIsLoading(true);
    $heroService.getHeros().subscribe(res => {
      setHeros(res.response);
      setIsLoading(false);
    })
  }, [])

  return (
    <>
    <h2>Heros</h2>
    <div style={{position: 'relative'}}>
      {isLoading && <LoadingBlock style={{minHeight: '100px'}} />}
      <HeroList 
        heros={heros} 
        selectedIndex={heros.findIndex((hero) => hero.id === heroId)}
        onCardClick={index => navigate(heros[index].id)} 
      />
    </div>
    <Outlet />
    </>
  );
};

export default HeroListPage;
