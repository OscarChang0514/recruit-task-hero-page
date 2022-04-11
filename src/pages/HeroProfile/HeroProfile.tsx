import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import AbilityNumberInput from 'src/components/AbilityNumberInput';
import LoadingBlock from 'src/components/LoadingBlock';
import { HeroProfileService } from './HeroFrofile.service';
import { SaveButton, StyledHeroProfile } from './HeroProfile.style';
import { HeroProfileProps, Profile } from './HeroProfile.type';
import { getProfileRemainPoint } from './HeroProfile.util';

const HeroProfile: React.FC<HeroProfileProps> = (props) => {

  const $heroProfileService = HeroProfileService();

  const [heroProfile, setHeroProfile] = useState<Profile>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { heroId } = useParams();

  const remainPoint = useMemo(() => getProfileRemainPoint(heroProfile), [heroProfile]);

  const submitHeroProfile = useCallback(() => {
    $heroProfileService.updateHeroProfile(heroId, heroProfile).subscribe(() => {
      alert('更新成功!');
    });
  }, [heroProfile]);

  const handleProfileChange = (profile: Profile) => {
    getProfileRemainPoint(profile) >= 0 && setHeroProfile(profile)
  };

  useEffect(() => {
    setIsLoading(true);
    $heroProfileService.getHeroProfile(heroId).subscribe(res => {
      setHeroProfile({
        ...res.response,
        total: Object.values<number>(res.response).reduce((sum, current) => current + sum, 0)
      });
      setIsLoading(false);
    })
  }, [heroId])

  return (<div>
    <h2>Profile</h2>
    <StyledHeroProfile>
      {isLoading && <LoadingBlock style={{ minHeight: '100px' }} />}
      {heroProfile && <>
        <div style={{ flex: '1 0 65%' }}>
          <AbilityNumberInput
            title={'AGI'}
            value={heroProfile.agi}
            min={0}
            max={heroProfile.total}
            onChange={(value) => handleProfileChange({ ...heroProfile, agi: value })}
          />
          <AbilityNumberInput
            title={'INT'}
            value={heroProfile.int}
            min={0}
            max={heroProfile.total}
            onChange={(value) => handleProfileChange({ ...heroProfile, int: value })}
          />
          <AbilityNumberInput
            title={'LUK'}
            value={heroProfile.luk}
            min={0}
            max={heroProfile.total}
            onChange={(value) => handleProfileChange({ ...heroProfile, luk: value })}
          />
          <AbilityNumberInput
            title={'STR'}
            value={heroProfile.str}
            min={0}
            max={heroProfile.total}
            onChange={(value) => handleProfileChange({ ...heroProfile, str: value })}
          />
        </div>
        <div style={{ flex: '1 0 30%', display: 'flex', alignItems: 'end', justifyContent: 'right' }}>
          <div style={{ textAlign: 'left' }}>
            <h4>剩餘點數: {remainPoint}</h4>
            <SaveButton disabled={remainPoint > 0} onClick={submitHeroProfile}>
              儲存
            </SaveButton>
          </div>
        </div>
      </>}
    </StyledHeroProfile>
  </div>);
};

export default HeroProfile;
