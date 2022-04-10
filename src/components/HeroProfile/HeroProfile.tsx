import { StyledHeroProfile } from './HeroProfile.style';
import type { HeroProfileProps } from './HeroProfile.type';
import AbilityNumberInput from '../AbilityNumberInput';

const HeroProfile: React.FC<HeroProfileProps> = (props) => {

  const { profile, onProfileChange } = props;

  return (<>
    <AbilityNumberInput
      title={'AGI'}
      value={profile.agi}
      min={0}
      max={profile.total}
      onChange={(value) => onProfileChange({...profile, agi: value})}
    />
    <AbilityNumberInput
      title={'INT'}
      value={profile.int}
      min={0}
      max={profile.total}
      onChange={(value) => onProfileChange({...profile, int: value})}
    />
    <AbilityNumberInput
      title={'LUK'}
      value={profile.luk}
      min={0}
      max={profile.total}
      onChange={(value) => onProfileChange({...profile, luk: value})}
    />
    <AbilityNumberInput
      title={'STR'}
      value={profile.str}
      min={0}
      max={profile.total}
      onChange={(value) => onProfileChange({...profile, str: value})}
    />
  </>);
};

HeroProfile.defaultProps = {
  onProfileChange: () => {}
}

export default HeroProfile;
