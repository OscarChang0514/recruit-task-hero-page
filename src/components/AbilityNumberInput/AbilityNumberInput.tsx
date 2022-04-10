import { AddButton, MinusButton, Progress, StyledAbilityNumberInput, TextBlock } from './AbilityNumberInput.style';
import type { AbilityNumberInputProps } from './AbilityNumberInput.type';

const AbilityNumberInput: React.FC<AbilityNumberInputProps> = (props) => {

  const {min, max, value, progress, title, onChange} = props;

  const isShowProgress = (min || min === 0) && (max || max === 0) && progress;

  const handleChange = (newValue: number) => {
    let isValid = true;
    (min || min === 0) && (isValid = newValue >= min);
    (max || max === 0) && (isValid = newValue <= max);
    isValid && onChange(newValue)
  };

  return (
    <StyledAbilityNumberInput>
      <TextBlock>{title}</TextBlock>
      <MinusButton onClick={() => handleChange(value - 1)} /> 
      <TextBlock>{value}</TextBlock>
      <AddButton onClick={() => handleChange(value + 1)} />
      {isShowProgress && <Progress min={min} max={max} value={value} />}
    </StyledAbilityNumberInput>
  );
};

AbilityNumberInput.defaultProps = {
  value: 0,
  progress: true,
  onChange: () => {},
}

export default AbilityNumberInput;
