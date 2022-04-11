import { BasePrimaryButton } from './PrimaryButton.style';
import type { PrimaryButtonProps } from './PrimaryButton.type';

/**
 * 基礎Button元件，套上了定的style
 */
const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return <BasePrimaryButton {...props} />;
};

export default PrimaryButton;
