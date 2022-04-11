
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router';
import HeroCard from 'src/components/HeroCard';
import LoadingBlock from 'src/components/LoadingBlock';
import { ListBlock } from './HeroList.style';
import { HeroService } from './HeroList.service';
import type { Hero, HeroListPageProps } from './HeroList.type';

const HeroList: React.FC<HeroListPageProps> = (props) => {

  const $heroService = HeroService();

  const navigate = useNavigate();

  const { heroId } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    setIsLoading(true);
    $heroService.getHeroes().subscribe(res => {
      setHeroes(res.response);
      setIsLoading(false);
    })
  }, [])

  return (
    <>
    <h2>Heroes</h2>
    <div style={{position: 'relative'}}>
      {isLoading && <LoadingBlock style={{minHeight: '100px'}} />}
      <ListBlock>
        {heroes.map((hero, index) => 
          <HeroCard 
            {...hero}
            key={'hero' + hero.id}  
            selected={hero.id === heroId}
            onCardClick={() => navigate(heroes[index].id)} 
          />
        )}
      </ListBlock>
    </div>
    <Outlet />
    </>
  );
};

export default HeroList;
