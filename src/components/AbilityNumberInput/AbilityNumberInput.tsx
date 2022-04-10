import { AddButton, MinusButton, Progress, StyledAbilityNumberInput, ValueBlock } from './AbilityNumberInput.style';
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
      <span>{title}</span>
      <ValueBlock>
        <MinusButton onClick={() => handleChange(value - 1)} /> 
        {value} 
        <AddButton onClick={() => handleChange(value + 1)} />
      </ValueBlock>
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
