import { AddButton, MinusButton, Progress, StyledAbilityNumberInput, TextBlock } from './AbilityNumberInput.style';
import type { AbilityNumberInputProps } from './AbilityNumberInput.type';

/**
 * 提供數值加減的NumberInput，在min max參數皆有傳入時會顯示Progress來表示數值長度
 * @example <AbilityNumberInput value={75} min={0} max={100} />
 */
const AbilityNumberInput: React.FC<AbilityNumberInputProps> = (props) => {

  const {min, max, value, progress, title, onChange} = props;

  const isShowProgress = (min || min === 0) && (max || max === 0) && progress;

  const handleChange = (newValue: number) => {
    let isMinValid = (min || min === 0) ? newValue >= min : true;
    let isMaxValid = (max || max === 0) ? newValue <= max : true;
    isMinValid && isMaxValid && onChange(newValue);
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
