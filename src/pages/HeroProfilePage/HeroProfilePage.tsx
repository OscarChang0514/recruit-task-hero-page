import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import HeroProfile from 'src/components/HeroProfile';
import { Profile } from 'src/types/hero.type';
import { HeroProfileService } from './HeroFrofilePage.service';
import { StyledHeroProfilePage } from './HeroProfilePage.style';
import { HeroProfilePageProps } from './HeroProfilePage.type';
import { getProfileRemainPoint } from './HeroProfilePage.util';

const HeroProfilePage: React.FC<HeroProfilePageProps> = (props) => {

  const $heroProfileService = HeroProfileService();

  const [heroProfile, setHeroProfile] = useState<Profile>(null);

  const { heroId } = useParams();

  const remainPoint = useMemo(() => getProfileRemainPoint(heroProfile), [heroProfile]);

  const handleUpdateHeroProfile = useCallback(() => {
    $heroProfileService.updateHeroProfile(heroId, heroProfile).subscribe();
  }, [heroProfile]);

  useEffect(() => {
    $heroProfileService.getHeroProfile(heroId).subscribe(res => {
      setHeroProfile({
        ...res.response,
        total: Object.values<number>(res.response).reduce((sum, current) => current + sum, 0)
      });
    })
  }, [heroId])


  return (heroProfile && <div>
    <h2>Profile</h2>
    <StyledHeroProfilePage>
      <div style={{flex: '1 0 65%'}}>
        <HeroProfile 
          profile={heroProfile} onProfileChange={(profile) => {
            getProfileRemainPoint(profile) >= 0 && setHeroProfile(profile)
          }} 
        />
      </div>
      <div style={{flex: '1 0 30%', display: 'flex', alignItems: 'end', justifyContent: 'right'}}>
        <div style={{textAlign: 'left'}}>
          <div>剩餘點數: {remainPoint}</div>
          <button disabled={remainPoint > 0} onClick={handleUpdateHeroProfile}>
            儲存
          </button>
        </div>
      </div>
    </StyledHeroProfilePage>
  </div>);
};

export default HeroProfilePage;
