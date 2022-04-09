import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { HeroProfileService } from './HeroFrofilePage.service';
import { HeroProfile, HeroProfilePageProps } from './HeroProfilePage.type';

const HeroProfilePage: React.FC<HeroProfilePageProps> = (props) => {

  const $heroProfileService = HeroProfileService();

  const { heroId } = useParams();

  const [heroProfile, setHeroProfile] = useState<HeroProfile>(null);

  const handleUpdateHeroProfile = (() => {
    $heroProfileService.updateHeroProfile(heroId, heroProfile).subscribe();
  });

  useEffect(() => {
    $heroProfileService.getHeroProfile(heroId).subscribe(res => {
      setHeroProfile(res.response);
    })
  }, [heroId])


  return (
    <>
    </>
    }

    </>
  );
};

export default HeroProfilePage;
